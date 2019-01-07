/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/Command.js":
/*!***************************!*\
  !*** ./src/js/Command.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n/**\n * This is a command object which contains two properties\n * @param direction the direction in which we want the Robot to move\n * @param steps the number of steps that we want the Robot to travel\n * @constructor\n */\nvar Command = function () {\n    function Command(direction, steps) {\n        _classCallCheck(this, Command);\n\n        this.direction = direction;\n        this.steps = steps;\n        this.print = this.print.bind(this);\n    }\n\n    _createClass(Command, [{\n        key: 'print',\n        value: function print() {\n            console.log('Command: ', this.direction, this.steps);\n        }\n    }]);\n\n    return Command;\n}();\n\nexports.default = Command;\n\n//# sourceURL=webpack:///./src/js/Command.js?");

/***/ }),

/***/ "./src/js/Compass.js":
/*!***************************!*\
  !*** ./src/js/Compass.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n/**\n * This is function maps pole directions (in the command)\n * to the correct axis\n * @constructor\n */\nvar Compass = function () {\n    function Compass() {\n        _classCallCheck(this, Compass);\n\n        this.e = {\n            axis: 'Y',\n            direction: '+'\n        };\n        this.w = {\n            axis: 'Y',\n            direction: '-'\n        };\n        this.s = {\n            axis: 'X',\n            direction: '+'\n        };\n        this.n = {\n            axis: 'X',\n            direction: '-'\n        };\n\n        this.print = this.print.bind(this);\n\n        /**\n         * Return the axis (e.g x, -x, y, -y) for a given pole direction (e.g E W S N)\n         * @param poleDirection\n         * @returns {*}\n         */\n        this.mapPoleToAxis = this.mapPoleToAxis.bind(this);\n    }\n\n    _createClass(Compass, [{\n        key: 'print',\n        value: function print() {\n            console.log('Inside compass');\n            console.log(this.e);\n            console.log(this.w);\n            console.log(this.s);\n            console.log(this.n);\n        }\n    }, {\n        key: 'mapPoleToAxis',\n        value: function mapPoleToAxis(poleDirection) {\n            return this[poleDirection.toLowerCase()];\n        }\n    }]);\n\n    return Compass;\n}();\n\nexports.default = Compass;\n\n//# sourceURL=webpack:///./src/js/Compass.js?");

/***/ }),

/***/ "./src/js/Coordinates.js":
/*!*******************************!*\
  !*** ./src/js/Coordinates.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n/**\n * This is the coordinates object which contains two properties\n * @param x the initial x axis in the cartesian coordinate system\n * @param y the initial y axis in the cartesian coordinate system\n * @constructor\n */\nvar Coordinates = function () {\n    function Coordinates(x, y) {\n        _classCallCheck(this, Coordinates);\n\n        this.x = x;\n        this.y = y;\n        this.traversed = [];\n\n        this.add = this.add.bind(this);\n        this.print = this.print.bind(this);\n        this.printTraversed = this.printTraversed.bind(this);\n    }\n\n    _createClass(Coordinates, [{\n        key: 'add',\n        value: function add(coordinates) {\n            this.traversed.push(coordinates);\n        }\n    }, {\n        key: 'print',\n        value: function print() {\n            console.log('x: ' + this.x + ' ' + 'y: ' + this.y);\n        }\n    }, {\n        key: 'printTraversed',\n        value: function printTraversed() {\n            this.traversed.forEach(function (coord) {\n                coord.print();\n            });\n        }\n    }]);\n\n    return Coordinates;\n}();\n\nexports.default = Coordinates;\n\n//# sourceURL=webpack:///./src/js/Coordinates.js?");

/***/ }),

/***/ "./src/js/Robot.js":
/*!*************************!*\
  !*** ./src/js/Robot.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _Coordinates = __webpack_require__(/*! ./Coordinates */ \"./src/js/Coordinates.js\");\n\nvar _Coordinates2 = _interopRequireDefault(_Coordinates);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n/**\n * This is the Robot function, it can take the initial coordinates to locate it self\n * in the cartesian coordinate system.\n * It uses compass to find the direction on the axis to move\n * It can receive a command and move accordingly\n * While moving it records the number of coordinates it travelled\n * @param compass\n * @param currentCoordinates\n * @constructor\n */\nvar Robot = function () {\n    function Robot(compass, initialCoordinates, robotConfig, DEBUG) {\n        _classCallCheck(this, Robot);\n\n        this.compass = compass;\n        this.initialCoordinates = initialCoordinates;\n        this.robotConfig = robotConfig;\n        this.debug = DEBUG;\n\n        this.previousCoordinates = new _Coordinates2.default(initialCoordinates.x, initialCoordinates.y);\n        this.currentCoordinates = new _Coordinates2.default(initialCoordinates.x, initialCoordinates.y);\n        this.direction = 'E';\n        this.traversed = [];\n        this.traversed.push('x' + this.currentCoordinates.x + 'y' + this.currentCoordinates.y);\n\n        this.command = this.command.bind(this);\n        this.printTraversed = this.printTraversed.bind(this);\n        this.addTraversed = this.addTraversed.bind(this);\n        this.getUniquePlacesCleaned = this.getUniquePlacesCleaned.bind(this);\n    }\n\n    _createClass(Robot, [{\n        key: 'getUniquePlacesCleaned',\n        value: function getUniquePlacesCleaned() {\n            return this.traversed.length;\n        }\n    }, {\n        key: 'addTraversed',\n        value: function addTraversed() {\n            var xDiff = this.currentCoordinates.x - this.previousCoordinates.x;\n            var yDiff = this.currentCoordinates.y - this.previousCoordinates.y;\n\n            // x changes ?\n            if (xDiff !== 0) {\n                if (xDiff > 0) {\n                    for (var i = this.previousCoordinates.x; i <= this.currentCoordinates.x; i++) {\n                        var visited = 'x' + i + 'y' + this.currentCoordinates.y;\n                        if (!this.traversed.includes(visited)) {\n                            this.traversed.push(visited);\n                        }\n                    }\n                } else {\n                    for (var _i = this.previousCoordinates.x; _i >= this.currentCoordinates.x; _i--) {\n                        var _visited = 'x' + _i + 'y' + this.currentCoordinates.y;\n                        if (!this.traversed.includes(_visited)) {\n                            this.traversed.push(_visited);\n                        }\n                    }\n                }\n            }\n\n            // y changes ?\n            if (yDiff !== 0) {\n                if (yDiff > 0) {\n                    for (var _i2 = this.previousCoordinates.y; _i2 <= this.currentCoordinates.y; _i2++) {\n                        var _visited2 = 'x' + this.currentCoordinates.x + 'y' + _i2;\n                        if (!this.traversed.includes(_visited2)) {\n                            this.traversed.push(_visited2);\n                        }\n                    }\n                } else {\n                    for (var _i3 = this.previousCoordinates.y; _i3 >= this.currentCoordinates.y; _i3--) {\n                        var _visited3 = 'x' + this.currentCoordinates.x + 'y' + _i3;\n                        if (!this.traversed.includes(_visited3)) {\n                            this.traversed.push(_visited3);\n                        }\n                    }\n                }\n            }\n        }\n    }, {\n        key: 'command',\n        value: function command(_command) {\n            this.direction = _command.direction;\n            var compassAxis = this.compass.mapPoleToAxis(_command.direction);\n            this.previousCoordinates = new _Coordinates2.default(this.currentCoordinates.x, this.currentCoordinates.y);\n\n            /**\n             * Move Robot on the correct axis\n             */\n            var x = this.currentCoordinates.x;\n            var y = this.currentCoordinates.y;\n\n            if (compassAxis.axis === 'Y') {\n                y = compassAxis.direction === '+' ? this.currentCoordinates.y + _command.steps : this.currentCoordinates.y - _command.steps;\n                // Cannot send out of grid\n                y = y < this.robotConfig.yMin ? this.robotConfig.yMin : y;\n                y = y > this.robotConfig.yMax ? this.robotConfig.yMax : y;\n            }\n\n            if (compassAxis.axis === 'X') {\n                x = compassAxis.direction === '+' ? this.currentCoordinates.x + _command.steps : this.currentCoordinates.x - _command.steps;\n                // Cannot send out of grid\n                x = x < this.robotConfig.xMin ? this.robotConfig.xMin : x;\n                x = x > this.robotConfig.xMax ? this.robotConfig.xMax : x;\n            }\n\n            if (this.debug) {\n                _command.print();\n            }\n\n            this.currentCoordinates = new _Coordinates2.default(x, y);\n            this.addTraversed();\n\n            if (this.debug) {\n                this.currentCoordinates.print();\n            }\n        }\n    }, {\n        key: 'printTraversed',\n        value: function printTraversed() {\n            console.log('Traversed coordinates:');\n            this.traversed.forEach(function (c) {\n                if (c instanceof _Coordinates2.default) {\n                    c.print();\n                } else {\n                    console.log(c);\n                }\n            });\n        }\n    }]);\n\n    return Robot;\n}();\n\nexports.default = Robot;\n\n//# sourceURL=webpack:///./src/js/Robot.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.robotConfig = undefined;\n\nvar _Compass = __webpack_require__(/*! ./Compass */ \"./src/js/Compass.js\");\n\nvar _Compass2 = _interopRequireDefault(_Compass);\n\nvar _Command = __webpack_require__(/*! ./Command */ \"./src/js/Command.js\");\n\nvar _Command2 = _interopRequireDefault(_Command);\n\nvar _Coordinates = __webpack_require__(/*! ./Coordinates */ \"./src/js/Coordinates.js\");\n\nvar _Coordinates2 = _interopRequireDefault(_Coordinates);\n\nvar _Robot = __webpack_require__(/*! ./Robot */ \"./src/js/Robot.js\");\n\nvar _Robot2 = _interopRequireDefault(_Robot);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction runRobot(initialXY, commands, robotConfig, DEBUG) {\n    /**\n     * We need a compass to tell the Robot\n     * which pole direction corresponds to which axis\n     * @type {Compass}\n     */\n    var compass = new _Compass2.default();\n\n    /**\n     * We also need the initial coordinates of the Robot\n     * to start with\n     * @type {Coordinates}\n     */\n    var xy = initialXY.split(' ');\n    var x = Number(xy[0]);\n    var y = Number(xy[1]);\n    var startingCoord = new _Coordinates2.default(x, y);\n\n    /**\n     * Lets create our robot at the specified coordinates\n     * and with the compass with hand\n     * @type {Command}\n     */\n    var robot = new _Robot2.default(compass, startingCoord, robotConfig, DEBUG);\n\n    /**\n     * But our Robot is static and standing the initial coordinates\n     * Lets make it more by issuing a command or two\n     * @type {Command}\n     */\n    commands.forEach(function (cmdString) {\n        var cmdArray = cmdString.split(' ');\n        var cmd = new _Command2.default(cmdArray[0], Number(cmdArray[1]));\n        robot.command(cmd);\n    });\n\n    console.log('=> Cleaned: ' + robot.getUniquePlacesCleaned());\n\n    /**\n     * And finally lets see which coordinates the robot did traverse\n     */\n    if (DEBUG) {\n        robot.printTraversed();\n    }\n}\n\nvar DEBUG = false;\n\n/*\n// Run without stdin\nrunRobot(11, 12, [\n    'E 2',\n    'N 1',\n    'W 2',\n    'S 1',\n    'E 2',\n    'E 2',\n], DEBUG);\n*/\n\nprocess.stdin.resume();\nprocess.stdin.setEncoding('utf8');\n\nvar input = new Array();\nvar counter = 0;\nvar robotConfig = exports.robotConfig = {\n    xMin: -100000,\n    xMax: 100000,\n    yMin: -100000,\n    yMax: 100000\n};\n\nprocess.stdin.on('data', function (data) {\n    input.push(data.toString().trim());\n\n    // Check number of commands\n    if (counter === 0) {\n        var numberOfCommands = Number(input[0]);\n        if (numberOfCommands < 0 || numberOfCommands > 10000) {\n            console.log('Number of commands should be between 0 and 10000 (inc)');\n            process.exit();\n        }\n    }\n\n    // Check x y coordinates\n    if (counter === 1) {\n        var xy = input[1].split(' ');\n        var x = Number(xy[0]);\n        var y = Number(xy[1]);\n        if (x > 100000 || x < -100000 || y > 100000 || y < -100000) {\n            console.log('Value of x and y should be between -100000 and 100000 (inc)');\n            process.exit();\n        }\n    }\n\n    // Check commands\n    if (counter > 1) {\n        var cmd = input[counter].split(' ');\n        var direction = cmd[0];\n        if (!['E', 'W', 'S', 'N'].includes(direction)) {\n            console.log('Direction of the command should by among: ', ['E', 'W', 'S', 'N']);\n            process.exit();\n        }\n        var steps = Number(cmd[1]);\n        if (steps <= 0 || steps >= 100000) {\n            console.log('Value of steps in a the command should be between 0 and 100000');\n            process.exit();\n        }\n    }\n\n    counter++;\n\n    // Finished commands ? Run robot\n    if (counter > Number(input[0]) + 1) {\n        if (DEBUG) {\n            console.log(input);\n        }\n        var initialCoordinates = input[1];\n        var commands = input.slice(2);\n        runRobot(initialCoordinates, commands, robotConfig, DEBUG);\n        process.exit();\n    }\n});\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ })

/******/ });