import * as all from './all.js';

describe('all.js', () => {
    it('explain Keys', () => {
        const keys = Object.keys(all);
        expect(keys.length).toBe(4);
        expect(all['A']).toBeDefined();
        expect(typeof all['A']).toBe('function');
        expect ((new all['A']('Aaron')) instanceof (all['A'])).toBeTrue();
    });
});

// eof
