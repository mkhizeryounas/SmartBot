<?php
header("Content-Type: application/json");
$arr = [
    "Zameen" => "https://api.apify.com/v1/execs/ktaDgyqRSq9D5s8Wr/results?format=json&simplified=1",
    
    "Lamudi" => "https://api.apify.com/v1/execs/BkvnowoBW6cEwWfsL/results?format=json&simplified=1",
    
    "JageerDar" => "https://api.apify.com/v1/execs/KhwWmfR7iMrZGaqyY/results?format=json&simplified=1",
    
    "MeraGhar" => "https://api.apify.com/v1/execs/2iA4fEZG3rr4ud9nt/results?format=json&simplified=1"
];

$var = [];
foreach($arr as $key => $value) {
    $tmp = file_get_contents($value);
    array_push($var, [
        "service" => $key,
        "data" => json_decode($tmp, true)
    ]);
}

// echo json_encode($var);
// exit();
$_POST = json_decode(file_get_contents('php://input'), true);

$res = [];

$data = [
    $_POST['result']['parameters']['area'][0],$_POST['result']['parameters']['price'][0],$_POST['result']['parameters']['size'][0]
];

$response = [];
foreach($var as $key => $value) {
    foreach($value['data'] as $e)  {
        // echo json_encode($e);
        // exit();

        if(
            strpos(strtolower($e['title']), strtolower($_POST['result']['parameters']['area'][0])) &&
            $e['price'] <= $_POST['result']['parameters']['price'][0]
            && strpos(strtolower($e['title']), strtolower($_POST['result']['parameters']['size'][0]))
        ) {
            array_push($res, [
                "service" => $value['service'],
                "data" => $e
            ]);
        }
    }
}

$msg =  count($res[0]['data']['title']) > 0 ? $res[0]['data']['title']." ( For more info please visit -> ". $res[0]['link']: "Could not found anything for you, Sorry!";
$msg = "";

if(count($res[0]['data']['title']) > 0) {
    foreach($arr as $k => $v) {
        foreach($res as $d) {
            // echo json_encode($k);
            // exit();
            if($k == $d['service']) {
                $msg .= strtoupper($k)." - ".$d['data']['title']." ( For more info please visit -> ". $d['data']['link'].'<br>';
                break;
            }
        }
    }
}
else {
    $msg = 'Sorry! No Results found against your Requirements';
}

$response = [
    "speech" => $msg,
    "displayText" => $msg,
    "data" => $data,
    "source" => "dev_server"
];

echo json_encode($response);
