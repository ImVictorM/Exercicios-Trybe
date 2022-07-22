const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

// Adicione se código aqui
// 1 - crescente
// people.sort((next, previous) => next.age - previous.age);

// 2 - decrescente
people.sort((next, previous) => previous.age - next.age);
console.log(people);