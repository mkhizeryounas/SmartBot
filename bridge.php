<?php
header("Content-Type: application/json");
$data = json_decode(file_get_contents($_GET['q']."&sessionId=00098425-3d5e-d225-96ab-9961b0c6ff92"), true);
echo json_encode($data);