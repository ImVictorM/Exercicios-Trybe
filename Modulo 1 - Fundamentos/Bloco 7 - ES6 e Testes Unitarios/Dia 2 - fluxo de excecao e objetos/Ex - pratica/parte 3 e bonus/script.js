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
const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
console.log(allLessons);

// 6
const numberOfStudents = (obj) => {
  let total = 0;
  for (let lesson in obj) {
    total += obj[lesson].numeroEstudantes;
  }
  return total;
}
console.log(numberOfStudents(allLessons));

// 7
const getValueByNumber = (obj, index) => {
  const values = Object.values(obj);
  return values[index];
}
console.log(getValueByNumber(lesson1, 0));

//8 
const verifyEntry = (obj, key, value) => {
  const objEntries = Object.entries(obj);
  for (const entry of objEntries) {
    if (entry[0] === key && entry[1] === value) {
      return true;
    }
  }
  return false;
}
console.log(verifyEntry(lesson3, 'turno', 'noite'));
console.log(verifyEntry(lesson3, 'materia', 'Maria Clara'));

// bonus

// 1
const mathCount = (obj) => {
  let count = 0;
  for (const lesson in obj) {
    const subject = obj[lesson].materia
    if (subject === 'Matemática') {
      count += 1;
    }
  }
  return count;
}
console.log(mathCount(allLessons));

// 2
const createReport = (obj, professorName) => {
  const report = {
    professor: professorName,
    aulas: [],
    estudantes: 0,
  };
  for (const each in obj) {
    if (obj[each].professor === professorName) {
      report.aulas.push(obj[each].materia);
      report.estudantes += obj[each].numeroEstudantes;
    }
  }
  return report;
}
console.log(createReport(allLessons, 'Maria Clara'));

