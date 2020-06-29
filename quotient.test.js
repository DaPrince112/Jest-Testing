const quotient = require('./quotient');

test('Performing Division', () =>{
    expect(quotient(6, 2)).toBe(3);
    expect(quotient(14, 2)).toBe(7);
});