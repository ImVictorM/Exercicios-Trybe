const uppercase = require('./exercise7');

describe('Teste a função uppercase', () => {
  it('testa a callback da função', (done) => {
    function callback(string) {
      expect(string).toEqual('VICTOR FIGUEIREDO');
      done();
    }
    uppercase('victor figueiredo', callback);
  });
});