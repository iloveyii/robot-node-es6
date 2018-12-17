import {assert, expect} from 'chai';
import Robot from '../src/js/Robot';
import Coordinates from "../src/js/Coordinates";
import Compass from "../src/js/Compass";
import Command from "../src/js/Command";
import {robotConfig} from "../src/js";

describe('src/Robot.js', ()=> {
    it('Class Robot has property placesCleaned', () => {
        const compass = new Compass();
        const startingCoord = new Coordinates(12, 10);
        const robot = new Robot(compass, startingCoord, robotConfig, false);
        expect(robot).to.have.property('getUniquePlacesCleaned');
    });

    it('Robot should clean 12 places', () => {
        const commands = [
            'S 3',
            'S 1',
            'E 2',
            'N 2',
            'W 1',
            'W 3',
        ];
        const initialCoordinates = new Coordinates(1, 2);
        const compass = new Compass();
        const robot = new Robot(compass, initialCoordinates, robotConfig, false);
        commands.forEach(cmdStr => {
            const cmdA = cmdStr.split(' ');
            robot.command(new Command(cmdA[0], Number(cmdA[1])));
        });
        assert.equal(12, robot.getUniquePlacesCleaned());
    });

    it('Robot should clean 18 places', () => {
        const commands = [
            'S 3',
            'S 1',
            'E 2',
            'N 2',
            'W 1',
            'W 3',
            'N 3',
            'E 2',
            'S 6'
        ];
        const initialCoordinates = new Coordinates(1, 2);
        const compass = new Compass();
        const robot = new Robot(compass, initialCoordinates, robotConfig, false);
        commands.forEach(cmdStr => {
            const cmdA = cmdStr.split(' ');
            robot.command(new Command(cmdA[0], Number(cmdA[1])));
        });
        assert.equal(18, robot.getUniquePlacesCleaned());
    })
});
