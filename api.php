<?php
header("Content-Type: application/json");
$var = file_get_contents("https://api.apify.com/v1/execs/xarPDpN8g54y9NbZh/results?format=json&simplified=1");
$_POST = json_decode(file_get_contents('php://input'), true);

$var = json_decode($var, true);
$res = [];

$data = [
    $_POST['result']['parameters']['area'][0],$_POST['result']['parameters']['price'][0],$_POST['result']['parameters']['size'][0]
];

foreach($var as $e)  {
    if(
        strpos($e['title'], $_POST['result']['parameters']['area'][0]) &&
        $e['price'] <= $_POST['result']['parameters']['price'][0] &&
        strpos($e['title'], $_POST['result']['parameters']['size'][0])
    ) {
        array_push($res, $e);
    }
}

$response = [
    "speech" => "Check now",
    "displayText" => $res[0],
    "data" => $data,
    "source" => "dev_server"
];

echo json_encode($response);
