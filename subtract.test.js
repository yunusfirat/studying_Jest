const subtract = require('./subtract');

test('adds 2 - 1 to equal 3', () => {
  expect(subtract(2, 1)).toBe(1);
});