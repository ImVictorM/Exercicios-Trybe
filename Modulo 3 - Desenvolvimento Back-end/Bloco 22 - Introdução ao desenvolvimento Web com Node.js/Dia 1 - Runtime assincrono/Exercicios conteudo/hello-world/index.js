const { question, questionInt } = require('readline-sync');

const name = question("What's your name? ");
const age = questionInt('And your age? ');

console.log(`Hello, ${name}! You are ${age} years old!`);