// 1
const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = (arr) => {
  // Adiciona seu código aqui
  const chosenOne = arr.find((number) => {
    return number % 3 === 0 && number % 5 === 0;
  });
  return chosenOne;
}

console.log(findDivisibleBy3And5(numbers));

// 2
const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (arr) => {
  // Adicione seu código aqui:
  const chosenOne = arr.find((name) => {
    return name.length === 5;
  });
  return chosenOne;
}

console.log(findNameWithFiveLetters(names));

// 3
const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

function findMusic(id) {
  // Adicione seu código aqui
  const chosenOne =  musicas.find((music) => music.id === id);
  return chosenOne.title;
}

console.log(findMusic('31031685'));