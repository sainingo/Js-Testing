 const { expect } = require('@jest/globals');
const stringLength = require('./stringLength');

test('expect output to be reverse', () => {
  const reversedStr = stringLength('hello');
  expect(reversedStr).toBe(5)
});