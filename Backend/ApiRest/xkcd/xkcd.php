<?php

// echo file_get_contents('http://xkcd.com/info.0.json').PHP_EOL; // PHP_EOL es un salto de linea

$json = file_get_contents('http://xkcd.com/info.0.json');

$data = json_decode($json, true); // true para que convierta el json a un array, sino es un objeto

echo $data['img'].PHP_EOL;