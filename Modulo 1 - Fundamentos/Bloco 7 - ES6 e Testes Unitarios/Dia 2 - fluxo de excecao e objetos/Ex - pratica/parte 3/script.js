const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addNightShift = (obj, key, value) => {
  const newKey = key;
  obj[newKey] = value;
  return obj;
}

console.log(addNightShift(lesson2, 'turno', 'noite'));

const objKeys = (obj) => Object.keys(obj);
console.log(objKeys(lesson3));
