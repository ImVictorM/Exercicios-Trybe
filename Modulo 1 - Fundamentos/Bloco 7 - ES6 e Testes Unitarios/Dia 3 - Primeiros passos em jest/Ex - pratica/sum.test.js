const sum = require('./sum');

describe('The function sum: ', () => {
  it('Returns 9 when sum(4, 5)', () => {
    expect(sum(4, 5)).toEqual(9);
  });
})