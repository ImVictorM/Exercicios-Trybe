// 1
const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

saudacoes[1](saudacoes[0]); // Olá

// Produza o mesmo resultado acima, porém utilizando array destructuring
const [ message, greetingsFunction ] = saudacoes;
greetingsFunction(message);

// 2
let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo
const [ animal2, bebida2, comida2 ] = [comida, animal, bebida]
console.log(animal2, bebida2, comida2);

// 3

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo

[,,,six, eight, ten, twelve] = numerosPares;

numerosPares = [six, eight, ten, twelve];
console.log(numerosPares)



