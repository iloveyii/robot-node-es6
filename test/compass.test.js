import { expect } from 'chai';
import Compass from '../src/js/Compass';

describe('src/Compass.js', _=> {
    it('should have E property', () => {
        let compass = new Compass();
        expect(compass).to.have.property('e');
        let result = compass.e;
        expect(result).to.have.property('axis');
    });
    it('should have W property', () => {
        let compass = new Compass();
        expect(compass).to.have.property('w');
        let result = compass.w;
        expect(result).to.have.property('axis');
    });
    it('should have S property', () => {
        let compass = new Compass();
        expect(compass).to.have.property('s');
        let result = compass.s;
        expect(result).to.have.property('axis');
    });
    it('should have N property', () => {
        let compass = new Compass();
        expect(compass).to.have.property('n');
        let result = compass.e;
        expect(result).to.have.property('axis');
    });
});
