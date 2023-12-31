<?php

// /usr/bin/php cron.php -s site_admin -c cron/util/update_times -p <last_chat_id>

if (is_numeric($cronjobPathOption->value)) {
    $lastId = (int)$cronjobPathOption->value;
} else {
    $lastId = 0;
}

echo "Resaving chats\n";

$pageLimit = 500;

for ($i = 0; $i < 1000000; $i++) {

    echo "Saving chats - ",($i + 1),"\n";

    $chats = erLhcoreClassModelChat::getList(array('offset' => 0, 'filtergt' => array('id' => $lastId), 'limit' => $pageLimit, 'sort' => 'id ASC'));

    if (!empty($chats))
    {
        end($chats);
        $lastChat = current($chats);

        $lastId = $lastChat->id;

        echo $lastId,'-',count($chats),"\n";

        if (empty($chats)){
            exit;
        }

        foreach ($chats as $chat) {
            \LiveHelperChat\Helpers\ChatDuration::setChatTimes($chat);
            $chat->updateThis(['update' => ['frt','chat_duration','aart','mart']]);
        }

    } else {
        echo "No chats to resave!\n";
        exit;
    }
}

?>
