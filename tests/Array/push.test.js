require('../../src/Array');
const equals = require('../equals');

test('Push method: Test return value', () => {
  const array1 = [1, 30, 39, 29, 10, 13];
  const length = array1.push2([1, 2, 3]);
  expect(length === array1.length).toBe(true);
});
