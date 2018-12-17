import Coordinates from './Coordinates';

/**
 * This is the Robot function, it can take the initial coordinates to locate it self
 * in the cartesian coordinate system.
 * It uses compass to find the direction on the axis to move
 * It can receive a command and move accordingly
 * While moving it records the number of coordinates it travelled
 * @param compass
 * @param currentCoordinates
 * @constructor
 */
export default class Robot {
    constructor(compass, initialCoordinates, robotConfig, DEBUG) {
        this.compass = compass;
        this.initialCoordinates = initialCoordinates;
        this.robotConfig = robotConfig;
        this.debug = DEBUG;

        this.uniquePlacesCleaned = 0;
        this.previousCoordinates = new Coordinates(initialCoordinates.x, initialCoordinates.y);
        this.currentCoordinates = new Coordinates(initialCoordinates.x, initialCoordinates.y);
        this.direction = 'E';
        this.traversed = [];
        this.traversed.push(new Coordinates(this.currentCoordinates.x, this.currentCoordinates.y));

        this.command = this.command.bind(this);
        this.printTraversed = this.printTraversed.bind(this);
        this.addPlaceCleaned = this.addPlaceCleaned.bind(this);
        this.addTraversed = this.addTraversed.bind(this);
    }

    addPlaceCleaned(currentCoordinate, command) {
        let placeAlreadyCleaned = false;

        this.traversed.forEach( cleanedCoordinate => {
            if( (currentCoordinate.x == cleanedCoordinate.x) && (currentCoordinate.y === cleanedCoordinate.y) ) {
                placeAlreadyCleaned = true;
            }
        });

        if( ! placeAlreadyCleaned) {
            this.uniquePlacesCleaned += command.steps;
        }

    }

    addTraversed() {
        const xDiff = this.currentCoordinates.x - this.previousCoordinates.x;
        const yDiff = this.currentCoordinates.y - this.previousCoordinates.y;

        // x changes ?
        if(xDiff !== 0) {
            if(xDiff > 0) {
                for (let i = this.previousCoordinates.x; i <= this.currentCoordinates.x; i++) {
                    this.traversed.push( 'x'+i, 'y'+this.currentCoordinates.y);
                }
            } else {
                for (let i = this.currentCoordinates.x; i <= this.previousCoordinates.x; i++) {
                    this.traversed.push( 'x'+i, 'y'+this.currentCoordinates.y);
                }
            }
        }

        // y changes ?
        if(yDiff !== 0) {
            if(yDiff > 0) {
                for (let i = this.previousCoordinates.y; i <= this.currentCoordinates.y; i++) {
                    this.traversed.push(new Coordinates(this.currentCoordinates.x, i));
                }
            } else {
                for (let i = this.currentCoordinates.y; i <= this.previousCoordinates.y; i++) {
                    this.traversed.push(new Coordinates(this.currentCoordinates.x, i));
                }
            }

        }

        console.log('x Diff ', this.currentCoordinates.x - this.previousCoordinates.x);
        console.log('y Diff ', this.currentCoordinates.y - this.previousCoordinates.y);


    }

    command(command) {
        this.direction = command.direction;
        var compassAxis = this.compass.mapPoleToAxis(command.direction);
        this.previousCoordinates = new Coordinates(this.currentCoordinates.x, this.currentCoordinates.y);
        /**
         * Move Robot on the correct axis
         */
        if (compassAxis.axis === 'Y') {
            let y = (compassAxis.direction === '+') ? this.currentCoordinates.y + command.steps : this.currentCoordinates.y - command.steps;
            // Cannot send out of grid
            y = (y < this.robotConfig.yMin) ? this.robotConfig.yMin : y;
            y = (y > this.robotConfig.yMax) ? this.robotConfig.yMax : y;
            this.currentCoordinates.y = y;
        }

        if (compassAxis.axis === 'X') {
            let x = (compassAxis.direction === '+') ? this.currentCoordinates.x + command.steps : this.currentCoordinates.x - command.steps;
            // Cannot send out of grid
            x = ( x < this.robotConfig.xMin) ? this.robotConfig.xMin : x;
            x = ( x > this.robotConfig.xMax) ? this.robotConfig.xMax : x;
            this.currentCoordinates.x = x;
        }

        this.addPlaceCleaned(new Coordinates(this.currentCoordinates.x, this.currentCoordinates.y), command);

        if(this.debug) {
            command.print();
        }

        this.currentCoordinates = new Coordinates(this.currentCoordinates.x, this.currentCoordinates.y);
        // this.traversed.push(new Coordinates(this.currentCoordinates.x, this.currentCoordinates.y));
        this.addTraversed();

        if(this.debug) {
            this.currentCoordinates.print();
        }
    };

    printTraversed() {
        console.log('Traversed coordinates:');
        this.traversed.forEach(function (c) {
            if(c instanceof Coordinates) {
                c.print();
            } else {
                console.log(c);
            }
        });
    }
}
