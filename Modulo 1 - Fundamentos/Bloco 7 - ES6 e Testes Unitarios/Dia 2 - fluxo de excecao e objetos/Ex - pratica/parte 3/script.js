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
// 1
const addNightShift = (obj, key, value) => {
  const newKey = key;
  obj[newKey] = value;
  return obj;
}
console.log(addNightShift(lesson2, 'turno', 'noite'));

// 2
const objKeys = (obj) => Object.keys(obj);
console.log(objKeys(lesson3));

// 3
const objLength = (obj) => Object.keys(obj).length;
console.log(objLength(lesson1));

// 4
const objValues = (obj) => Object.values(obj);
console.log(objValues(lesson1));

// 5
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons);