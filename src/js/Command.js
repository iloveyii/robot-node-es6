/**
 * This is a command object which contains two properties
 * @param direction the direction in which we want the Robot to move
 * @param steps the number of steps that we want the Robot to travel
 * @constructor
 */
export default class Command {
    constructor(direction, steps) {
        this.direction = direction;
        this.steps = steps;
        this.print = this.print.bind(this);
    }

    print() {
        console.log('Command: ', this.direction, this.steps);
    }
}
