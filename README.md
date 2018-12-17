Project Robot
=======
This a small Robot application developed in Node, ES6, JS. 

## Setup and first run

  * You need to have node, npm, git pre installed. This app has been developed and tested on Ubuntu 14.04, 17.04, 17.10. 
  * Clone the repository `git clone https://bitbucket.org/iloveyii/robot-node-es6`.
  * Run (inside root directory) npm install `npm install`.
  * To run the tests `npm run test`.
  * To run the Robot `npm run robot`.
  * Once transpiled with the above command, it can be run directly like `node public/bundle.js`.
  
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
