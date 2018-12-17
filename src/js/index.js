import Compass from './Compass';
import Command from './Command';
import Coordinates from './Coordinates';
import Robot from './Robot';


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
const startingCoord = new Coordinates(12, 10);

/**
 * Lets create our robot at the specified coordinates
 * and with the compass with hand
 * @type {Command}
 */
const robot = new Robot(compass, startingCoord);

/**
 * But our Robot is static and standing the initial coordinates
 * Lets make it more by issuing a command or two
 * @type {Command}
 */
const cmd1 = new Command('E', 2);
robot.command(cmd1);

const cmd2 = new Command('N', 1);
robot.command(cmd2);

const cmd3 = new Command('N', 2);
robot.command(cmd3);

console.log('=> Cleaned: ' + robot.placesCleaned);

/**
 * And finally lets see which coordinates the robot did traverse
 */
robot.printTraversed();

