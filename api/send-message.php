<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json');

require 'db_connect.php';

// Get input from JSON or POST
$input = json_decode(file_get_contents("php://input"), true);

$sender_id   = $input['sender_id'] ?? $_POST['sender_id'] ?? null;
$receiver_id = $input['receiver_id'] ?? $_POST['receiver_id'] ?? null;
$message     = $input['message'] ?? $_POST['message'] ?? null;

if (!$sender_id || !$receiver_id || !$message) {
    echo json_encode([
        "success" => false,
        "message" => "Missing required fields"
    ]);
    exit;
}

try {
    // Insert message into database
    $stmt = $pdo->prepare("
        INSERT INTO live_chat_messages (sender_id, receiver_id, message, created_at)
        VALUES (:sender_id, :receiver_id, :message, NOW())
    ");
    $stmt->execute([
        ':sender_id' => $sender_id,
        ':receiver_id' => $receiver_id,
        ':message' => $message
    ]);

    // Return the inserted message with timestamp
    $insertedMsg = [
        'id' => $pdo->lastInsertId(),
        'sender_id' => $sender_id,
        'receiver_id' => $receiver_id,
        'message' => $message,
        'created_at' => date('Y-m-d H:i:s')
    ];

    echo json_encode([
        "success" => true,
        "message" => $insertedMsg
    ]);
} catch (PDOException $e) {
    echo json_encode([
        "success" => false,
        "message" => $e->getMessage()
    ]);
}
?>
