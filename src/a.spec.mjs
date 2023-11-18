import A from './a.js';

describe('a.js', () => {
    const NAME = 'Aaron';

    it('default export is the A class', () => {
        expect(A).toBeDefined();
        expect(typeof A).toBe('function');
        expect(A instanceof Function).toBeTrue();
        const a = new A(NAME);
        expect(a).toBeDefined();
        expect(typeof a).toBe('object');
        expect(a instanceof A).toBeTrue();
        expect(a.name).toBe(NAME);
    });

    describe('A', () => {
        let _instance;
        beforeEach(() => {
            _instance = new A(NAME);
        })

        describe('name property', () => {
            it('is a string', () => {
                expect(typeof _instance.name).toBe('string');
            });

            it('is not assignable', () => {
                const name = _instance.name;
                expect(() => { _instance.name = 'FROG FACE'; }).toThrow();
                expect(_instance.name).toBe(name);
            });

            it('returns the string used in the constructor', () => {
                expect(_instance.name).toBe(NAME);
            });
        });

        describe('hi property', () => {
            it('is a function', () => {
                expect(_instance.hi).toBeDefined();
                expect(typeof _instance.hi).toBe('function');
            });

            it('returns a string containing its name', () => {
                expect(_instance.hi().indexOf(NAME)).not.toBe(-1);
            });
        });
    });
});

// eof
