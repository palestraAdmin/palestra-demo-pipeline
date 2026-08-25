const { sumar, restar } = require('./app');
 
test('sumar 2 + 3 debe dar 5', () => {
  expect(sumar(2, 3)).toBe(5);
});
 
test('restar -5 - 3 debe dar -8', () => {
  expect(restar(-5, 3)).toBe(-8);
});