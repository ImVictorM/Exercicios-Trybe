const sum = require('./sum');

describe('The function sum: ', () => {
  it('Returns 9 when sum(4, 5)', () => {
    expect(sum(4, 5)).toEqual(9);
  });

  it('Returns 0 when sum(0, 0)', () => {
    expect(sum(0, 0)).toEqual(0);
  });

  it('Throws an error when sum(4, "5")', () => {
    expect(() => sum(4, '5')).toThrow('parameters must be numbers');
  });

})