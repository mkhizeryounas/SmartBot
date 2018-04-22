<?php
header("Content-Type: application/json");
$var = file_get_contents("https://api.apify.com/v1/execs/xarPDpN8g54y9NbZh/results?format=json&simplified=1");
$_POST = json_decode(file_get_contents('php://input'), true);

$var = json_decode($var, true);
$res = [];

foreach($var as $e)  {
    if(
        strpos($e['title'], $_GET['size']) &&
        $e['price'] <= $_GET['price'] &&
        strpos($e['title'], $_GET['location'])
    ) {
        array_push($res, $e);
    }
}

$response = [
    "speech" => "Dev server has received the request",
    "displayText" => "Dev server has received the request",
    "data" => $_POST,
    "source" => "dev_server"
];

echo json_encode($response);
