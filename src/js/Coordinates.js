
/**
 * This is the coordinates object which contains two properties
 * @param x the initial x axis in the cartesian coordinate system
 * @param y the initial y axis in the cartesian coordinate system
 * @constructor
 */
export default class Coordinates {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.traversed = [];

        this.add = this.add.bind(this);
        this.print = this.print.bind(this);
        this.printTraversed = this.printTraversed.bind(this);
    }

    add(coordinates) {
        this.traversed.push(coordinates);
    }

    print() {
        console.log('x: ' + this.x + ' ' + 'y: ' + this.y);
    }

    printTraversed() {
        this.traversed.forEach(function (coord) {
            coord.print();
        })
    }
}
