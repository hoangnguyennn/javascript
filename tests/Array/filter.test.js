require('../../src/Array');
const equals = require('../equals');

test('Filter method: Test return value', () => {
  const words = [
    'spray',
    'limit',
    'elite',
    'exuberant',
    'destruction',
    'present'
  ];

  const result1 = words.filter((word) => word.length > 6);
  const result2 = words.filter2((word) => word.length > 6);
  expect(equals(result1, result2)).toBe(true);
});

test('Filter method: Test callback loop', () => {
  const array1 = [1, 30, 39, 29, 10, 13];
  const stack1 = [];
  const stack2 = [];

  array1.filter((...args) => stack1.push(...args));
  array1.filter2((...args) => stack2.push(...args));

  expect(equals(stack1, stack2)).toBe(true);
});

test('Filter method: Test thisArg', () => {
  const array1 = [1, 30, 39, 29, 10, 13];
  const stack1 = [];
  const stack2 = [];

  const thisArg = {
    something: 'something'
  };

  array1.filter(function () {
    stack1.push(this);
  }, thisArg);
  array1.filter2(function () {
    stack2.push(this);
  }, thisArg);

  expect(stack1.includes(thisArg) && stack2.includes(thisArg)).toBe(true);
});
