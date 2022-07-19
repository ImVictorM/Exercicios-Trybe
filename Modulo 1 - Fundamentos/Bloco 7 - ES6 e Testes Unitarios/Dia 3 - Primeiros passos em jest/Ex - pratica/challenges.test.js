const challenges = require('./challenges');

describe('The function encode', () => {
  const encode = challenges.encode
  it('is a function', () => {
    expect(typeof encode).toEqual('function');
  });

  it('converts a vowel to respective number', () => {
    expect(encode('a')).toMatch(/1/);
    expect(encode('e')).toMatch(/2/);
    expect(encode('i')).toMatch(/3/);
    expect(encode('o')).toMatch(/4/);
    expect(encode('u')).toMatch(/5/);
  });

  it('has the same length', () => {
    const testMessage = encode('string test');
    expect(testMessage.length).toBe('string test'.length);
  });

  it('does not convert other vowels', () => {
  });
});

describe('The function decode', () => {
  it('is a function', () => {
    expect(typeof challenges.decode).toEqual('function');
  });

  it('converts a number to respective vowel', () => {
    expect(challenges.decode('1')).toMatch(/a/);
    expect(challenges.decode('2')).toMatch(/e/);
    expect(challenges.decode('3')).toMatch(/i/);
    expect(challenges.decode('4')).toMatch(/o/);
    expect(challenges.decode('5')).toMatch(/u/);
  });

  it('has the same length', () => {
    const testMessage = challenges.decode('str3ng t2st');
    expect(testMessage.length).toBe('str3ng t2st'.length);
  })

});