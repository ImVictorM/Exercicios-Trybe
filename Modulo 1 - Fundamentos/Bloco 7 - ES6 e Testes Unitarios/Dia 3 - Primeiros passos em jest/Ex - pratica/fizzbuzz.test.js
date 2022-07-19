const myFizzBuzz = require('./fizzbuzz');
const fizzBuzz = require('./fizzbuzz');

describe('The function myFizzBuzz', () => {
  it('receives 15 and returns fizzbuzz', () => {
    expect(myFizzBuzz(15)).toEqual('fizzbuzz');
  });

  it('receives 6 and returns fizz', () => {
    expect(myFizzBuzz(6)).toEqual('fizz');
  });

  it('receives 10 and returns buzz', () => {
    expect(myFizzBuzz(10)).toEqual('buzz');
  });

  it('receives 2 and returns 2', () => {
    expect(myFizzBuzz(2)).toEqual(2);
  });

  it('receives a string and returns false', () => {
    expect(myFizzBuzz('sapato')).toEqual(false);
  });
});