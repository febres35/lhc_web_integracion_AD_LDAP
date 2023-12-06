<?php

$tpl = erLhcoreClassTemplate::getInstance('lhdepartment/edit.tpl.php');

$Departament = erLhcoreClassDepartament::getSession()->load( 'erLhcoreClassModelDepartament', (int)$Params['user_parameters']['departament_id'] );

$DepartamentCustomWorkHours = erLhcoreClassModelDepartamentCustomWorkHours::getList(array('filter' => array('dep_id' => $Departament->id),'sort' => 'date_from ASC'));

$userDepartments = true;

/**
 * Append user departments filter
* */
if ($currentUser->hasAccessTo('lhdepartment','manageall') !== true)
{
    $userDepartments = erLhcoreClassUserDep::parseUserDepartmetnsForFilter($currentUser->getUserID(), $currentUser->cache_version);
    if ($userDepartments !== true) {
    	if (!in_array($Departament->id, $userDepartments)) {
    		erLhcoreClassModule::redirect('department/departments');
    		exit;
    	}
    }
}

if ($Params['user_parameters_unordered']['action'] == 'operators') {
    $tpl = erLhcoreClassTemplate::getInstance( 'lhdepartment/operators.tpl.php');
    $tpl->set('department', $Departament);
    $tpl->set('group_op', isset($_GET['group']) && $_GET['group'] === 'true' ? true : (isset($_GET['group']) ? false : null));
    $tpl->set('only_online', isset($_GET['only_online']) && $_GET['only_online'] === 'true' ? true : (isset($_GET['only_online']) ? false : null));
    $tpl->set('only_logged', isset($_GET['only_logged']) && $_GET['only_logged'] === 'true' ? true : (isset($_GET['only_logged']) ? false : null));
    $tpl->set('only_offline', isset($_GET['only_offline']) && $_GET['only_offline'] === 'true' ? true : (isset($_GET['only_offline']) ? false : null));
    echo $tpl->fetch();
    exit;
}

if ( isset($_POST['Cancel_departament']) ) {
    erLhcoreClassModule::redirect('department/departments');
    exit;
}

if ( isset($_POST['Delete_departament']) ) {

	if ($Departament->id == 1 || !isset($_POST['csfr_token']) || !$currentUser->validateCSFRToken($_POST['csfr_token']) || !$currentUser->hasAccessTo('lhdepartment','delete') || !$Departament->can_delete) {
		erLhcoreClassModule::redirect('department/departments');
		exit;
	}

	$Departament->removeThis();
    erLhcoreClassModule::redirect('department/departments');
    exit;
}


if (isset($_POST['Update_departament']) || isset($_POST['Save_departament'])  )
{
	if (!isset($_POST['csfr_token']) || !$currentUser->validateCSFRToken($_POST['csfr_token'])) {
		erLhcoreClassModule::redirect('department/departments');
		exit;
	}

    $previousState = $Departament->getState();

	$Errors = erLhcoreClassDepartament::validateDepartment($Departament);
	
    if (count($Errors) == 0)
    {    	
        erLhcoreClassDepartament::getSession()->update($Departament);

        $DepartamentCustomWorkHours = erLhcoreClassDepartament::validateDepartmentCustomWorkHours($Departament, $DepartamentCustomWorkHours);
        
        erLhcoreClassDepartament::validateDepartmentProducts($Departament);
        
        erLhcoreClassChatEventDispatcher::getInstance()->dispatch('department.modified',array('department' => $Departament));

        $currentState = $Departament->getState();

        erLhcoreClassLog::logObjectChange(array(
            'object' => $Departament,
            'check_log' => true,
            'msg' => array(
                'prev' => $previousState,
                'curr' => $currentState,
                'user_id' => $currentUser->getUserID()
            )
        ));

        if (isset($_POST['Save_departament'])) {
            erLhcoreClassModule::redirect('department/departments');
            exit;
        } else {
            $tpl->set('updated',true);
        }

    }  else {
        $tpl->set('errors',$Errors);
    }
}

$tpl->set('departament',$Departament);
$tpl->set('currentUser',$currentUser);
$tpl->set('limitDepartments',$userDepartments !== true ? array('filterin' => array('id' => $userDepartments)) : array());
$tpl->set('departamentCustomWorkHours', json_encode(erLhcoreClassDepartament::getDepartamentCustomWorkHoursData($DepartamentCustomWorkHours), JSON_HEX_APOS));

$Result['content'] = $tpl->fetch();
$Result['additional_footer_js'] = '<script src="'.erLhcoreClassDesign::designJS('js/angular.lhc.customdepartmentperiodgenerator.js').'"></script>';
$Result['path'] = array(
array('url' => erLhcoreClassDesign::baseurl('system/configuration'),'title' => erTranslationClassLhTranslation::getInstance()->getTranslation('department/edit','System configuration')),
array('url' => erLhcoreClassDesign::baseurl('department/index'),'title' => erTranslationClassLhTranslation::getInstance()->getTranslation('department/departments','Departments')),
array('url' => erLhcoreClassDesign::baseurl('department/departments'),'title' => erTranslationClassLhTranslation::getInstance()->getTranslation('department/departments','Departments list')),
array('title' => erTranslationClassLhTranslation::getInstance()->getTranslation('department/edit','Edit a department').' - '.$Departament->name));

?>