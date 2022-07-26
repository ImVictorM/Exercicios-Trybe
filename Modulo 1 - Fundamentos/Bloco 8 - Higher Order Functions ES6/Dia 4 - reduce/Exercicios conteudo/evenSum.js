const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const evenSum = numbers.reduce((sum, curr) => {
  if (curr % 2 === 0) {
    return sum + curr;
  }
  return sum;
}, 0);

console.log(evenSum);