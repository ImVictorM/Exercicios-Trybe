const readline = require('readline-sync');

function fibonacci(firstN) {
  const sequence = [1];
  if (firstN >= 2) {
    sequence.push(1);
  }
  const sequenceLen = sequence.length;
  for(let count = 1; count <= (firstN - sequenceLen); count += 1) {
    const sum = sequence[count - 1] + sequence[count];
    sequence.push(sum);
  }
  return sequence;
}

function main() {
  let number = null;
  number = readline.questionInt('Enter a number: ');
  while (number < 1) {
    number = readline.questionInt('Number must be greater than 0: ')
  } 
  const sequence = fibonacci(number);
  console.log(sequence);
}

main();