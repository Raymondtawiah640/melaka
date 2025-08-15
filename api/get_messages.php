<?php
header('Content-Type: application/json');
require 'db_connection.php'; // Your DB connection file

$sender_id = $_GET['sender_id'] ?? null;
$receiver_id = $_GET['receiver_id'] ?? null;

if (!$sender_id || !$receiver_id) {
    echo json_encode(["success" => false, "message" => "Missing user IDs"]);
    exit;
}

try {
    $stmt = $pdo->prepare("
        SELECT * FROM chat_messages
        WHERE (sender_id = :sender_id AND receiver_id = :receiver_id)
           OR (sender_id = :receiver_id AND receiver_id = :sender_id)
        ORDER BY created_at ASC
    ");
    $stmt->execute([
        ':sender_id' => $sender_id,
        ':receiver_id' => $receiver_id
    ]);

    $messages = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode(["success" => true, "messages" => $messages]);
} catch (PDOException $e) {
    echo json_encode(["success" => false, "message" => $e->getMessage()]);
}
?>
