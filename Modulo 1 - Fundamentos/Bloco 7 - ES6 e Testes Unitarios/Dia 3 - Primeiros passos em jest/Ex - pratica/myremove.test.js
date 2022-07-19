const myRemove = require('./myremove');

describe('The function myRemove()', () => {
  it('removes the number 3 of the array', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toContain(3);
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  it('does not return [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  it('does not change the array', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});