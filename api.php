<?php
header("Content-Type: application/json");
$var = file_get_contents("https://api.apify.com/v1/execs/xarPDpN8g54y9NbZh/results?format=json&simplified=1");

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

echo json_encode($res);
