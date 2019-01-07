<?php

header("Content-Type: application/json");


$result['status'] = true;
$result['output'] = 'cmd result';


echo json_encode($result);

