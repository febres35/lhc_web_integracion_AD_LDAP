<?php

$tpl = erLhcoreClassTemplate::getInstance('lhchat/cannedmsgedit.tpl.php');

$Msg = erLhcoreClassChat::getSession()->load( 'erLhcoreClassModelCannedMsg', (int)$Params['user_parameters']['id'] );

/**
 * Append user departments filter
 * */
$userDepartments = true;
if (!$currentUser->hasAccessTo('lhchat','explorecannedmsg_all')) {
    $userDepartments = erLhcoreClassUserDep::parseUserDepartmetnsForFilter($currentUser->getUserID(), $currentUser->cache_version);

    if ($userDepartments !== true) {
        if ((!erLhcoreClassUser::instance()->hasAccessTo('lhcannedmsg','see_global') && $Msg->department_id == 0) ||
            (!empty(array_diff($Msg->department_ids_front, $userDepartments)) && $Msg->department_id == -1)
        ) {
            $tpl->setFile( 'lhkernel/validation_error.tpl.php');
            $tpl->set('show_close_button',true);
            $tpl->set('auto_close_dialog',true);
            $tpl->set('errors',[erTranslationClassLhTranslation::getInstance()->getTranslation('chat/cannedmsg','You cannot modify canned messages for the departments you are not assigned to!')]);
            $Result['content'] = $tpl->fetch();
            return;
        }
    }
}


if ( isset($_POST['Cancel_action']) ) {
    erLhcoreClassModule::redirect('chat/cannedmsg');
    exit;
}

if ($currentUser->hasAccessTo('lhchat','administratecannedmsg') && isset($_POST['Update_action']) || isset($_POST['Save_action'])  )
{
    if (!isset($_POST['csfr_token']) || !$currentUser->validateCSFRToken($_POST['csfr_token'])) {
        erLhcoreClassModule::redirect('chat/cannedmsg');
        exit;
    }

   $previousState = $Msg->getState();

   $Errors = erLhcoreClassAdminChatValidatorHelper::validateCannedMessage($Msg, $userDepartments);
   
   erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.canned_msg_before_save',array('departments' => $userDepartments, 'errors' => & $Errors, 'msg' => & $Msg, 'scope' => 'global'));
   
    if (count($Errors) == 0)
    {
        $Msg->saveThis();
        
        erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.canned_msg_after_save',array('msg' => & $Msg));

        $currentState = $Msg->getState();

        erLhcoreClassLog::logObjectChange(array(
            'object' => $Msg,
            'check_log' => true,
            'msg' => array(
                'prev' => $previousState,
                'curr' => $currentState,
                'user_id' => $currentUser->getUserID()
            )
        ));
        
        if (isset($_POST['Save_action'])) {
            erLhcoreClassModule::redirect('chat/cannedmsg');
            exit;
        } else {
            $tpl->set('updated',true);
        }

    }  else {
        $tpl->set('errors',$Errors);
    }
}

$tpl->set('canned_message',$Msg);
$tpl->set('limitDepartments',$userDepartments !== true ? array('filterin' => array('id' => $userDepartments)) : array());

$Result['content'] = $tpl->fetch();
$Result['additional_footer_js'] = '<script src="'.erLhcoreClassDesign::designJS('js/angular.lhc.cannedmsg.js').'"></script>';

$Result['path'] = array(
array('url' => erLhcoreClassDesign::baseurl('system/configuration'),'title' => erTranslationClassLhTranslation::getInstance()->getTranslation('chat/cannedmsg','System configuration')),
array('url' => erLhcoreClassDesign::baseurl('chat/cannedmsg'),'title' => erTranslationClassLhTranslation::getInstance()->getTranslation('chat/cannedmsg','Canned messages')),
array('title' => erTranslationClassLhTranslation::getInstance()->getTranslation('chat/cannedmsg','Edit canned message')));

erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.cannedmsgedit_path',array('result' => & $Result));

?>