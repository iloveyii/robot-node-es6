/**
 * This is function maps pole directions (in the command)
 * to the correct axis
 * @constructor
 */
export default class Compass {
    constructor() {
        this.e = {
            axis: 'Y',
            direction: '+'
        };
        this.w = {
            axis: 'Y',
            direction: '-'
        };
        this.s = {
            axis: 'X',
            direction: '+'
        };
        this.n = {
            axis: 'X',
            direction: '-'
        };

        this.print = this.print.bind(this);

        /**
         * Return the axis (e.g x, -x, y, -y) for a given pole direction (e.g E W S N)
         * @param poleDirection
         * @returns {*}
         */
        this.mapPoleToAxis = this.mapPoleToAxis.bind(this);
    }

    print() {
        console.log('Inside compass');
        console.log(this.e);
        console.log(this.w);
        console.log(this.s);
        console.log(this.n);
    }

    mapPoleToAxis(poleDirection) {
        return this[poleDirection.toLowerCase()];
    }
}
