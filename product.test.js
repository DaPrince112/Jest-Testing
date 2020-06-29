const product = require('./product');

test('Performing Multiplication', () =>{
    expect(product(2, 1)).toBe(2);
    expect(product(7, 2)).toBe(14);
});