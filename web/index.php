<?php

header("Content-Type: application/json");


$result['status'] = true;
$result['output'] = 'cmd result';

$string = "
2
1 2
E 3
E 5";

$string = isset($_GET['command']) ? $_GET['command'] : $string;

$arrayString = explode("\n", trim($string) );

$script = "#!/usr/bin/expect -f
set timeout -1
spawn node bundle.js \n";

foreach ($arrayString as $argument) {
    $script .= sprintf('send "%s%s";%s', trim($argument), '\n', "\n");
}

$script .= "expect eof\n";

file_put_contents('run.sh', $script);
chmod('run.sh', 0777);

$output = exec("./run.sh");

$result['output'] = $output;
echo json_encode($result);

exit;
