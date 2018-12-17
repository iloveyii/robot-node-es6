import { expect } from 'chai';
import Robot from '../src/js/Robot';
import Coordinates from "../src/js/Coordinates";
import Compass from "../src/js/Compass";

describe('src/Robot.js', ()=> {
    it('Class Robot has property placesCleaned', () => {
        const compass = new Compass();
        const startingCoord = new Coordinates(12, 10);
        const robot = new Robot(compass, startingCoord);
        expect(robot).to.have.property('placesCleaned');
    });
});
