import Compass from './Compass';
import Command from './Command';
import Coordinates from './Coordinates';
import Robot from './Robot';


function runRobot(initialXY, commands, robotConfig, DEBUG) {
    /**
     * We need a compass to tell the Robot
     * which pole direction corresponds to which axis
     * @type {Compass}
     */
    const compass = new Compass();

    /**
     * We also need the initial coordinates of the Robot
     * to start with
     * @type {Coordinates}
     */
    const xy = initialXY.split(' ');
    const x = Number(xy[0]);
    const y = Number(xy[1]);
    const startingCoord = new Coordinates(x, y);

    /**
     * Lets create our robot at the specified coordinates
     * and with the compass with hand
     * @type {Command}
     */
    const robot = new Robot(compass, startingCoord, robotConfig, DEBUG);

    /**
     * But our Robot is static and standing the initial coordinates
     * Lets make it more by issuing a command or two
     * @type {Command}
     */
    commands.forEach(function (cmdString) {
        let cmdArray = cmdString.split(' ');
        let cmd = new Command(cmdArray[0], Number(cmdArray[1]));
        robot.command(cmd);
    });

    console.log('=> Cleaned: ' + robot.getUniquePlacesCleaned());

    /**
     * And finally lets see which coordinates the robot did traverse
     */
    if(DEBUG) {
        robot.printTraversed();
    }
}

const DEBUG = true;

/*
// Run without stdin
runRobot(11, 12, [
    'E 2',
    'N 1',
    'W 2',
    'S 1',
    'E 2',
    'E 2',
], DEBUG);
*/
const robotConfig = {
    xMin: -100000,
    xMax: 100000,
    yMin: -100000,
    yMax: 100000
};

// Run without stdin
/*
runRobot('1 2', [
    'S 3',
    'S 1',
    'E 2',
    'N 2',
    'W 1',
    'N 3',
], robotConfig, DEBUG);
*/

runRobot('1 2', [
    'S 3',
    'S 1',
    'E 2',
    'N 2',
    'W 1',
    'W 3',
    'N 3',
    'E 2',
    'S 6'
], robotConfig, DEBUG);
/*
process.stdin.resume();
process.stdin.setEncoding('utf8');

let input = new Array();
let counter = 0;
const robotConfig = {
    xMin: -100000,
    xMax: 100000,
    yMin: -100000,
    yMax: 100000
};

process.stdin.on('data', function (data) {
    input.push(data.toString().trim());

    // Check number of commands
    if(counter === 0) {
        const numberOfCommands = Number(input[0]);
        if(numberOfCommands < 0 || numberOfCommands > 10000) {
            console.log('Number of commands should be between 0 and 10000 (inc)');
            process.exit();
        }
    }

    // Check x y coordinates
    if(counter === 1) {
        const xy = input[1].split(' ');
        const x = Number(xy[0]);
        const y = Number(xy[1]);
        if( (x > 100000 || x < -100000) || (y > 100000 || y < -100000) ) {
            console.log('Value of x and y should be between -100000 and 100000 (inc)');
            process.exit();
        }
    }

    // Check commands
    if(counter > 1) {
        const cmd = input[counter].split(' ');
        const direction = cmd[0];
        if( ! ['E', 'W', 'S', 'N'].includes(direction)) {
            console.log('Direction of the command should by among: ', ['E', 'W', 'S', 'N']);
            process.exit();
        }
        const steps = Number(cmd[1]);
        if( steps <= 0 || steps >= 100000 ) {
            console.log('Value of steps in a the command should be between 0 and 100000');
            process.exit();
        }
    }

    counter++;

    // Finished commands ? Run robot
    if( counter > ( Number(input[0]) +  1) ) {
        if(DEBUG) {
            console.log(input);
        }
        const initialCoordinates = input[1];
        const commands = input.slice(2);
        runRobot(initialCoordinates, commands, robotConfig, DEBUG);
        process.exit();
    }
});
*/
