<?php

header("Content-Type: application/json");


$result['status'] = true;
$result['output'] = 'cmd result';

$command = "2 \n1 1\nN 3\nW 4";

$path = realpath( dirname(__FILE__) . '/../public/bundle.js') ;

echo $runit = "node $path < $command";

exec($runit, $output);

// print_r($output);
// echo json_encode($result);

