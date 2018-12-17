import Compass from './Compass';
import Command from './Command';
import Coordinates from './Coordinates';
import Robot from './Robot';


function runRobot(initialX, initialY, commands, DEBUG) {
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
    const startingCoord = new Coordinates(initialX, initialY);

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

const DEBUG = true;
runRobot(11, 12, [
    'E 2',
    'N 1',
    'W 2',
    'S 1',
    'E 2',
    'E 2',
], DEBUG);
