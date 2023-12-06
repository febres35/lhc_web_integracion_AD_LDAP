<?php if ((isset($async_call) && $async_call == true) || (isset($chat_started_now) && isset($chat_started_now) == true)) : ?>

<?php if (!(isset($react) && $react == true)) : ?>
<div class="meta-message-<?php echo $messageId?>">
<?php endif; ?>

    <script class="meta-message-<?php echo $messageId?>" data-bot-action="execute-js" <?php if (isset($metaMessage['chat_emit'])) : ?>data-bot-emit='<?php echo $metaMessage['chat_emit']?>'<?php endif; ?> <?php if (isset($metaMessage['chat_event'])) : ?>data-bot-event='<?php echo $metaMessage['chat_event']?>'<?php endif; ?>  <?php if (isset($metaMessage['ext_args'])) : ?>data-bot-args='<?php echo $metaMessage['ext_args']?>'<?php endif; ?> <?php if (isset($metaMessage['ext_execute'])) : ?>data-bot-extension="<?php echo $metaMessage['ext_execute']?>"<?php endif;?> >
    <?php if (isset($metaMessage['ext_execute']) && $metaMessage['ext_execute'] != '') : ?>
        lhinst.executeExtension(<?php echo json_encode($metaMessage['ext_execute'])?>,<?php echo json_encode(json_decode($metaMessage['ext_args'],true))?>);
    <?php elseif (isset($metaMessage['payload'])) : ?>
        <?php echo $metaMessage['payload']?>
    <?php endif; ?>
    </script>

<?php if (!(isset($react) && $react == true)) : ?>
</div>
<?php endif; ?>

<?php endif; ?>