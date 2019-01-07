<?php

header("Content-Type: application/json");


$result['status'] = true;
$result['output'] = 'cmd result';

$command = "2
1 1
N 3
W 4";

$path = realpath( dirname(__FILE__) . '/../public/bundle.js') ;

$runit = " echo '$command' ";

exec($runit, $output);

print_r($output);
// echo json_encode($result);

