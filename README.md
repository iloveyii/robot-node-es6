Project Robot
=======
This a small Robot application developed in Node, ES6, JS. 

![screenshot](http://robot.softhem.se/screen.png)

## Background
When you have many people working under the same roof, it is more likely to have the work place dirty. Therefore a care robot application is required for cleaning the work place floor.
Once the robot gets instructions it will keep on working without any human interventions, and robot would be able to provide how many unique places has been cleaned.

## Requirements
* The software application takes input on stdin and outputs on stdout.
* First line of the instructions shows the number ( 0 <= n <= 10,000) of commands that follow.
* Second line shows the x, y position ( - 100,000 <= x <= 100,000) on the cartesian coordinates system.
* Third and further lines show the movement command i.e direction( {E, W, S, N}) and steps ( 0 < s < 100,000) in the form : [Direction] [Number of steps].

## Setup and first run

  * You need to have node, npm, git pre installed. This app has been developed and tested on Ubuntu 14.04, 17.04, 17.10. 
  * Clone the repository `git clone https://bitbucket.org/iloveyii/robot-node-es6`.
  * Run (inside root directory) npm install `npm install`.
  * To run the tests `npm run test`.
  * To run the Robot `npm run robot`.
  * Once transpiled with the above command, it can be run directly like `node public/bundle.js`.
  
### Example Input
    ```
      2
      10 22
      E 2
      N 1
    ```
### Example output
    ```
      => Cleaned: 4
    ```
  
## Overall Structure

Below is the directory structure of the source code:

```
   |-public
   |--src
   |---bundle.js
   |-src
   |--js
   |---Command.js
   |---Compass.js
   |---Coordinates.js
   |---Robot.js
   |---idex.js
   |-test
   |--compass.test.js
   |--robot.test.js
   |-package.json
   |-webpack.config.js
   |-index.html
```

## Requirements
   * The application has been tested with the following.
   * Ubuntu 14.04, 17.04, 17.10
   * Node v9.11.2
   * Npm 5.6.0
   
## Testing
  * To run the mocha, chai unit tests, run `npm run test`.
  
  <i>Web development has never been so fun.</i>  
[Hazrat Ali](https://github.com/iloveyii) 
