#!/usr/bin/expect -f
set timeout -1
spawn node bundle.js 
send "2\n";
send "1 1\n";
send "N 3\n";
send "W 4\n";
expect eof
