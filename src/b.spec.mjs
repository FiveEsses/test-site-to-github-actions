import * as bjs from './b.js';

describe('b.js', () => {
    const NAME = 'Aaron';
    const EXPORT_LENGTH = 3;

    it(`exports ${EXPORT_LENGTH} classes`, () => {
        expect(bjs).toBeDefined();
        expect(typeof bjs).toBe('object');

        const keys = Object.keys(bjs);
        expect(keys.length).toBe(EXPORT_LENGTH);

        keys.forEach(k => {
            const I = bjs[k];
            expect(typeof I).toBe('function');
            const i = new I(NAME);
            expect(i).toBeDefined();
            expect(i instanceof I).toBeTrue();
        });
    });

    Object.keys(bjs).forEach((k) => {
        describe(`${k}`, () => {
            let _I;
            let _i;
            beforeEach(() => {
                _I = bjs[k];
                _i = new _I(NAME);
            });

            it('is a class', () => {
                expect(typeof _I).toBe('function');
                expect(_i).toBeDefined();
                expect(_i instanceof _I).toBeTrue();
            });

            describe('name property', () => {
                it('is a string', () => {
                    expect(typeof _i.name).toBe('string');
                });
    
                it('is not assignable', () => {
                    const name = _i.name;
                    expect(() => { _i.name = 'FROG FACE'; }).toThrow();
                    expect(_i.name).toBe(name);
                });
    
                it('contains the string used in the constructor', () => {
                    expect(_i.name.indexOf(NAME)).not.toBeLessThan(0);
                });
            });
    
            describe('hi property', () => {
                it('is a function', () => {
                    expect(_i.hi).toBeDefined();
                    expect(typeof _i.hi).toBe('function');
                });
    
                it('returns a string containing its name', () => {
                    expect(_i.hi().indexOf(NAME)).not.toBe(-1);
                });
            });
        });
    });
});

// eof
