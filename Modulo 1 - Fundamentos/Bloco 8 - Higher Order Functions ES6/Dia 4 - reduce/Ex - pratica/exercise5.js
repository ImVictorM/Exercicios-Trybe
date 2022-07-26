const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function countA (aCount, letter) {
  return letter === 'a' || letter === 'A' ? aCount += 1 : aCount;
}

function containsA(namesArray) {
  // escreva seu código aqui
  let finalCount = null;
  namesArray.forEach((name) => {
    const nameToArray = name.split('');
    const letterACount = nameToArray.reduce(countA, 0);
    finalCount += letterACount;
  });
  return finalCount;
}

console.log(containsA(names));