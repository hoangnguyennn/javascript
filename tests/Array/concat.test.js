require('../../src/Array');
const equals = require('../equals');

test('Concat method: Test return value', () => {
  const array1 = ['a', 'b', 'c'];
  const array2 = ['d', 'e', 'f'];
  const array3 = array1.concat(array2);
  const array4 = array1.concat2(array2);
  expect(equals(array3, array4)).toBe(true);
});
