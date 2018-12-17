




import Compass from './Compass';
import Command from './Command';
import Coordinates from './Coordinates';
import Robot from './Robot';


function runRobot(initialXY, commands, DEBUG) {
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
    const robot = new Robot(compass, startingCoord, DEBUG);

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

    console.log('=> Cleaned: ' + robot.placesCleaned);

    /**
     * And finally lets see which coordinates the robot did traverse
     */
    if(DEBUG) {
        robot.printTraversed();
    }
}

const DEBUG = false;

/*
runRobot(11, 12, [
    'E 2',
    'N 1',
    'W 2',
    'S 1',
    'E 2',
    'E 2',
], DEBUG);
*/

process.stdin.resume();
process.stdin.setEncoding('utf8');

var input = new Array();
var counter = 0;
process.stdin.on('data', function (data) {
    input.push(data.toString().trim());
    counter++;
    if( counter > ( Number(input[0]) +  1) ) {
        if(DEBUG) {
            console.log(input);
        }
        const initialCoordinates = (input[1]).toString().trim();
        const commands = input.slice(2);
        runRobot(initialCoordinates, commands, DEBUG);
        process.exit();
    }
});
