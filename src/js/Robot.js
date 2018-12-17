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
    constructor(compass, initialCoordinates, DEBUG) {
        this.compass = compass;
        this.initialCoordinates = initialCoordinates;
        this.debug = DEBUG;

        this.placesCleaned = 0;
        this.currentCoordinates = new Coordinates(initialCoordinates.x, initialCoordinates.y);
        this.direction = 'E';
        this.traversed = [];
        this.traversed.push(new Coordinates(this.currentCoordinates.x, this.currentCoordinates.y));

        this.command = this.command.bind(this);
        this.printTraversed = this.printTraversed.bind(this);
        this.addPlaceCleaned = this.addPlaceCleaned.bind(this);
    }

    addPlaceCleaned(currentCoordinate, command) {
        let placeAlreadyCleaned = false;

        this.traversed.forEach( cleanedCoordinate => {
            if( (currentCoordinate.x == cleanedCoordinate.x) && (currentCoordinate.y === cleanedCoordinate.y) ) {
                placeAlreadyCleaned = true;
            }
            console.log('Comparing ', currentCoordinate.x, cleanedCoordinate.x, currentCoordinate.y, cleanedCoordinate.y);
        });

        console.log('placeAlreadyCleaned ', placeAlreadyCleaned);
        if( ! placeAlreadyCleaned) {
            this.placesCleaned += command.steps;
        }

    }

    command(command) {
        this.direction = command.direction;
        var compassAxis = this.compass.mapPoleToAxis(command.direction);

        /**
         * Move Robot on the correct axis
         */
        if (compassAxis.axis === 'Y') {
            this.currentCoordinates.y = (compassAxis.direction === '+') ? this.currentCoordinates.y + command.steps : this.currentCoordinates.y - command.steps;
        }

        if (compassAxis.axis === 'X') {
            this.currentCoordinates.x = (compassAxis.direction === '+') ? this.currentCoordinates.x + command.steps : this.currentCoordinates.x - command.steps;
        }

        this.addPlaceCleaned(new Coordinates(this.currentCoordinates.x, this.currentCoordinates.y), command);

        if(this.debug) {
            command.print();
        }

        this.currentCoordinates = new Coordinates(this.currentCoordinates.x, this.currentCoordinates.y);
        this.traversed.push(new Coordinates(this.currentCoordinates.x, this.currentCoordinates.y));
        // this.placesCleaned += command.steps;


        if(this.debug) {
            this.currentCoordinates.print();
        }
    };

    printTraversed() {
        console.log('Traversed coordinates:');
        this.traversed.forEach(function (c) {
            c.print();
        });
    }
}
