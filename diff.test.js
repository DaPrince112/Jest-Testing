const diff = require('./diff');

test('Performing Subtraction', () =>{
    expect(diff(2, 1)).toBe(1);
    expect(diff(7, 2)).toBe(5);
});