// ex 1
const employee = (fullName) => {
  const emailFormat = fullName.split(' ').join('_');
  return {
    nomeCompleto: fullName,
    email: `${emailFormat}@trybe.com`,
  };
};

const newEmployees = (func) => {
  const employees = {
    id1: func('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: func('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: func('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

// console.log(newEmployees(employee));

// ex 2
const checkEquality = (number1, number2) => {
  if (number1 === number2) {
    return 'Parabéns você ganhou';
  }
  return 'Tente novamente';
}
const raffle = (number, func) => {
  const randomNumber = Math.floor(Math.random() * 5) + 1;
  return func(randomNumber, number);
}

// console.log(raffle(5, checkEquality));

// ex 3
const checkanswers = (rightAnswers, studentAnswers) => {
  let totalPoints = 0;
  for (let index = 0; index < rightAnswers.length; index += 1) {
    switch (studentAnswers[index]) {
      case rightAnswers[index]:
        totalPoints += 1;
        break;
      case 'N.A':
        totalPoints += 0;
        break;
      default:
        totalPoints -= 0.5;
        break;
    }
  }
  return totalPoints;
}

const grade = (rightAnswers, studentAnswers, callback) => {
  const finalGrade = callback(rightAnswers, studentAnswers);
  return finalGrade;
}

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

console.log(grade(RIGHT_ANSWERS, STUDENT_ANSWERS, checkanswers))