require('../../src/Array');
const equals = require('../equals');

test('Every method: Test return value', () => {
  const isBelowThreshold = (currentValue) => currentValue < 40;

  const array1 = [1, 30, 39, 29, 10, 13];
  expect(
    array1.every(isBelowThreshold) === array1.every2(isBelowThreshold)
  ).toBe(true);
});

test('Every method: Test callback loop', () => {
  const array1 = [1, 30, 39, 29, 10, 13];
  const stack1 = [];
  const stack2 = [];

  array1.every((...args) => stack1.push(...args));
  array1.every2((...args) => stack2.push(...args));

  expect(equals(stack1, stack2)).toBe(true);
});

test('Every method: Test thisArg', () => {
  const array1 = [1, 30, 39, 29, 10, 13];
  const stack1 = [];
  const stack2 = [];

  const thisArg = {
    something: 'something'
  };

  array1.every(function () {
    stack1.push(this);
  }, thisArg);
  array1.every2(function () {
    stack2.push(this);
  }, thisArg);

  expect(stack1.includes(thisArg) && stack2.includes(thisArg)).toBe(true);
});
