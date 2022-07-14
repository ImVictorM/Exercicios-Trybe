const longestWord = (phrase) => {
  const wordList = phrase.split(' ');
  let longestOne = '';
  let index = 0;
  while (index < wordList.length) {
    wordList[index].length > longestOne.length ? longestOne = wordList[index] : index += 1;
  }
  return longestOne;
}
const phrase = 'Antônio foi no banheiro e não sabemos o que aconteceu';
console.log(longestWord(phrase));