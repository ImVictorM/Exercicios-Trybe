const challenges = require('./challenges');

describe('The function encode', () => {
  it('is a function', () => {
    expect(typeof challenges.encode).toEqual('function');
  });
});

describe('The function decode', () => {
  it('is a function', () => {
    expect(typeof challenges.decode).toEqual('function');
  });
});