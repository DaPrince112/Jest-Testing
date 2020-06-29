const sum = require('./sum');

test('Performing Addition', () =>{
    expect(sum(1, 2)).toBe(3);
    expect(sum(3, 2)).toBe(5);
});