#!/usr/bin/expect -f
set timeout -1
spawn node bundle.js
expect ""
send "2\n";
expect ""
send "1 1\n";
send "E 3\n";
send "W 4\n";
expect eof