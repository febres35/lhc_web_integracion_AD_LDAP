<?php
#[\AllowDynamicProperties]
class erLhcoreClassModelGenericBotTriggerTemplate {

    use erLhcoreClassDBTrait;

    public static $dbTable = 'lh_generic_bot_trigger_template';

    public static $dbTableId = 'id';

    public static $dbSessionHandler = 'erLhcoreClassGenericBot::getSession';

    public static $dbSortOrder = 'DESC';

    public function getState()
    {
        $stateArray = array(
            'id' => $this->id,
            'name' => $this->name,
            'actions' => $this->actions
        );

        return $stateArray;
    }

    public function __get($var)
    {
        switch ($var) {
            case 'actions_front':

                if ($this->actions == ''){
                    $this->actions_front = array();
                } else {
                    $this->actions_front = json_decode($this->actions, true);
                }

                if (!is_array($this->actions_front)){
                    $this->actions_front = array();
                }

                return $this->actions_front;

            default:
                break;
        }
    }

    public function __toString()
    {
        return $this->name;
    }

    public $id = null;
    public $name = '';
    public $actions = '';
}