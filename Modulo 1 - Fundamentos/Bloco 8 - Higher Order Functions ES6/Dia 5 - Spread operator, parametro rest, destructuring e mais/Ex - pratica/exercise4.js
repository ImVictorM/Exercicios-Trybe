const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
];

// escreva filterPeople abaixo

function filterHandler (person) {
  const { nationality, bornIn } = person;
  const twenties = bornIn >= 1901 && bornIn <= 2000;
  if (nationality === 'Australian' && twenties) {
    return person;
  }
}

function filterPeople(people) {
  return people.filter(filterHandler);
}

console.log(filterPeople(people));