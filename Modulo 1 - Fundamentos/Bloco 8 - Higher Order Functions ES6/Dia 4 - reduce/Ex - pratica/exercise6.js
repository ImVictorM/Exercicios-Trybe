// const expected = [
//   { name: 'Pedro Henrique', average: 7.8 },
//   { name: 'Miguel', average: 9.2 },
//   { name: 'Maria Clara', average: 8.8 },
// ];

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage(students, grades) {
  // escreva seu código aqui
  const studentObj = students.map((student, index) => {
    const gradeAvg = grades[index]
      .reduce((sum, grade) => sum + grade) / grades[index].length;
    return {
      name: student[index],
      average: gradeAvg,
    }
  })
  return studentObj;
}

console.log(studentAverage(students, grades));
