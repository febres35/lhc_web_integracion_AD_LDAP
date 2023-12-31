<?php $events = $object->events;?>
<div ng-controller="ProactiveEventsFormCtrl as proev" <?php if (!empty($events)) : ?> ng-init='proev.events = <?php echo erLhcoreClassChatEvent::getEventJson($events)?>'<?php endif;?>>

    <input type="button" class="btn btn-secondary" ng-click="proev.addEvent()" value="<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/startchatformsettings','Add event')?>" />

    <hr>
    
    <div class="row">
        <div ng-repeat="event in proev.events" class="col-12">
            <div class="row">
                <div class="col-4">
                    <div class="form-group">
                        <label><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/startchatformsettings','Event')?></label>
                        <?php echo erLhcoreClassRenderHelper::renderCombobox( array (
                                'input_name'     => 'event_variable[]',
                				'optional_field' => erTranslationClassLhTranslation::getInstance()->getTranslation('chat/lists/search_panel','Select event'),
                                'selected_id'    => "",
                	            'css_class'      => 'form-control form-control-sm',
                	            'display_name'   => 'name',
                                'ng-model'       => 'event.event_type',
                                'list_function'  => 'erLhAbstractModelProactiveChatVariables::getList'
                        )); ?>
                    </div>
                </div>
                <div class="col-3">
                    <div class="form-group">
                        <label>Min number of times.</label>
                        <input type="text" class="form-control form-control-sm" name="min_number[]" value="" ng-model="event.min_number" />
                    </div>
                </div>
                <div class="col-3">
                    <div class="form-group">
                        <label>During last N seconds.</label>
                        <input type="text" class="form-control form-control-sm" name="during_seconds[]" value="" ng-model="event.during_seconds" />
                    </div>
                </div>
                <div class="col-2">
                    <label>&nbsp;</label><br/>
                    <button type="button" class="btn btn-danger btn-sm" ng-click="proev.deleteField(event)"><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/startchatformsettings','Remove')?></button>
                </div>
                <input type="hidden" name="event_id[]" value="{{event.id}}" />
            </div>
        </div>
    </div>
</div>