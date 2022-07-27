// escreva greet abaixo
function greet (name, greetingsPhrase = 'Hi') {
  return `${greetingsPhrase} ${name}`;
}

console.log(greet('John')) // 'Hi John'
console.log(greet('John', 'Good morning')) // 'Good morning John'
console.log(greet('Isabela', 'Oi')) // 'Oi Isabela'