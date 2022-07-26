const numbers = [50, 85, -30, 3, 15];

const maxNumber = numbers.reduce((bigger, curr) => bigger < curr ? curr : bigger);

console.log(maxNumber);