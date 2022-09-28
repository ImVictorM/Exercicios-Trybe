// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails, handlePokemonSearch } = require('./exercise8');

describe('A função getPokemonDetails', () => {

  it('retorna erro quando procuramos um pokémon que não existe no banco de dados', (done) => {
    // Escreva aqui seu código
    function callback(error, message) {
      expect(error.message).toBe('Não temos esse pokémon para você :(');
      done();
    }
    getPokemonDetails('Sapatomon', callback);
  });

  it('retorna um pokémon que existe no banco de dados', (done) => {
    // Escreva aqui seu código
    const pokemonMessage = `Olá, seu pokémon é o Charmander, o tipo dele é Fogo e a habilidade principal dele é Lança Chamas`;
    function callback(error, message) {
      expect(message).toEqual(pokemonMessage);
      done();
    }
    getPokemonDetails('Charmander', callback);
  });
});