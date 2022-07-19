const challenges = require('./challenges');

describe('The function encode', () => {
  it('is a function', () => {
    expect(typeof challenges.encode).toEqual('function');
  });

  it('converts vowel to respective number', () => {
    expect(challenges.encode('a')).toMatch(/1/);
    expect(challenges.encode('e')).toMatch(/2/);
    expect(challenges.encode('i')).toMatch(/3/);
    expect(challenges.encode('o')).toMatch(/4/);
    expect(challenges.encode('u')).toMatch(/5/);
  });
});

describe('The function decode', () => {
  it('is a function', () => {
    expect(typeof challenges.decode).toEqual('function');
  });
});