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
  const decode = challenges.decode;
  it('is a function', () => {
    expect(typeof decode).toEqual('function');
  });

  it('converts a number to respective vowel', () => {
    expect(decode('1')).toMatch(/a/);
    expect(decode('2')).toMatch(/e/);
    expect(decode('3')).toMatch(/i/);
    expect(decode('4')).toMatch(/o/);
    expect(decode('5')).toMatch(/u/);
  });

  it('has the same length', () => {
    const testMessage = decode('str3ng t2st');
    expect(testMessage.length).toBe('str3ng t2st'.length);
  });
});

const techList = challenges.techList;

describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});

