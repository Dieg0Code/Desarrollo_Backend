<?php
/*
$user = array_key_exists('PHP_AUTH_USER', $_SERVER) ? $_SERVER['PHP_AUTH_USER'] : '';
$pwd = array_key_exists('PHP_AUTH_PW', $_SERVER) ? $_SERVER['PHP_AUTH_PW'] : '';

// hardcoded user and password authentication
if ($user != 'admin' || $pwd != 'admin') {
    die;
}
*/
/*
// need hash, timestamp, and user id
if (
    !array_key_exists('HTTP_X_HASH', $_SERVER) ||
    !array_key_exists('HTTP_X_TIMESTAMP', $_SERVER) ||
    !array_key_exists('HTTP_X_UID', $_SERVER)
) {
    die;
}

list($hash, $uid, $timestamp) = [
    $_SERVER['HTTP_X_HASH'],
    $_SERVER['HTTP_X_UID'],
    $_SERVER['HTTP_X_TIMESTAMP'],
];

$secret = 'secret key';

$newHash = sha1($uid.$timestamp.$secret);

if ($newHash != $hash) {
    die;
}
*/

/*
if (!array_key_exists('HTTP_X_TOKEN', $_SERVER)) {
    die;
}

$url = 'http://localhost:8001';

$ch = curl_init($url);
curl_setopt(
    $ch,
    CURLOPT_HTTPHEADER,
    [
        "X-Token: {$_SERVER['HTTP_X_TOKEN']}",
    ]
);
curl_setopt(
    $ch,
    CURLOPT_RETURNTRANSFER,
    true
);

$ret = curl_exec($ch);

if ($ret !== 'true') {
    die;
}
*/

// available resources
$allowedResourceTypes = [
    'books',
    'authors',
    'genres',
];

// check if the resource is available
$resourceType = $_GET['resource_type'];

if(!in_array($resourceType, $allowedResourceTypes)){
    http_response_code(400);
    die;    
}


// resources
$books = [
    1 => [
        'title' => 'Lo que el viento se llevo',
        'id_author' => 2,
        'id_genre' => 2,
    ],
    2 => [
        'title' => 'La iliada',
        'id_author' => 1,
        'id_genre' => 1,
    ],
    3 => [
        'title' => 'La Odisea',
        'id_author' => 1,
        'id_genre' => 1,
    ],
];

// client will recive a json
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding");
header("Access-Control-Allow-Methods: PUT, POST, GET, OPTIONS, DELETE");

$resourceId = array_key_exists('resource_id', $_GET) ? $_GET['resource_id'] : ''; // one line if

// cases if the resource is available
switch ( strtoupper($_SERVER['REQUEST_METHOD']) ) {
    case 'GET':
        // if is empty
        if(empty($resourceId)){
            echo json_encode($books); // all books
        } else {
            // to return a specific resource by id
            if(array_key_exists($resourceId, $books)){
                echo json_encode($books[$resourceId]);
            }
        }
        break;
    case 'POST':
        $json = file_get_contents('php://input');

        $books[] = json_decode($json, true);

        // return the id generated for the new book
        // echo array_keys($books)[count($books) -1 ]; // last key
        echo json_encode($books);
        break;
    case 'PUT':
        // validate if the resource id exists
        if (!empty($resourceId) && array_key_exists($resourceId, $books)) {
            $json = file_get_contents('php://input');
            $books[$resourceId] = json_decode($json, true); // replace the old resource with the new one

            // echo json_encode($books)[count($books) -1 ];
            echo json_encode($books);
        }
        break;
    case 'DELETE':
        // validate if the resource id exists
        if (!empty($resourceId) && array_key_exists($resourceId, $books)) {
            unset($books[$resourceId]);
        }       
        echo json_encode($books);
        break;
}