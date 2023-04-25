const Calculatrice = require('./calculatrice');

describe('Calculatrice', ()=>{
    const calculatrice = new Calculatrice();

    test('add 1 + 2 equals 3',() => {
        expect(calculatrice.add(1,2)).toBe(3);
    });

    test('min 1 - 2 equals -1',() => {
        expect(calculatrice.min(1,2)).toBe(-1);
    });

    test('adds 8 / 2 equals 4',() => {
        expect(calculatrice.div(8,2)).toBe(4);
    });

    test('div 3 / 0 equals null',() => {
        expect(calculatrice.div(3,0)).toBe('division par 0 impossible');
    });
});