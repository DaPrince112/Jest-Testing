const power = require('./power');

test('Performing Constant multiplication', () =>{
    expect(power(2, 2)).toBe(4);
    expect(power(7, 2)).toBe(49);
});