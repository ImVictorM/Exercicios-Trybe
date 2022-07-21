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