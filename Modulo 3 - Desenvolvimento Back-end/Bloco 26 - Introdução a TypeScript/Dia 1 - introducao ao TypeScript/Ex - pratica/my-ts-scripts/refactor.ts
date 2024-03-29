// função 1
const numberInput: number = 7;

const isItAPrime = (param: number): boolean => {
  for (let i = 2; i < param; i++)
    if (param % i === 0) {
      return false;
    }
  return param > 1;
};

isItAPrime(numberInput)
  ? console.log(`${numberInput} é primo`)
  : console.log(`${numberInput} não é primo`);

// função 2
// Essa função é responsável por validar se o formato do e-mail está correto.

const emailInput: string = 'email@email.com';

const validateEmailFormat = (param: string): boolean => {
  var re: RegExp = /\S+@\S+\.\S+/;
  return re.test(param);
};

console.log(validateEmailFormat(emailInput));

// função 3
// Essa função recebe uma lista e ordena seu conteúdo de forma crescente.

const numberList: number[] = [10, 5, 18, 2, 8, 23];

const sortInput = (param: number[]): number[] => {
  return param.sort(function(a, b){return a-b});
};

console.log(sortInput(numberList));

// função 4
// Essa função é responsável por receber um objeto e formar uma frase utilizando as chaves do mesmo.
const peopleInput = {
  name: 'Rui',
  age: 23,
};

type Person = {
  name: string,
  age: number,
};

const createSimpleSentence = (param: Person): string => {
  return `Olá, meu nome é ${param.name} e tenho ${param.age} anos.`;
}

console.log(createSimpleSentence(peopleInput));

// função 5
// Essa é uma função que verifica se a idade passada é maior ou menor de 18 anos.
const ageInput: number = 15;

const isOfLegalAge = (param: boolean | string): boolean => {
  return !!param
}

ageInput >= 18
  ? console.log(isOfLegalAge('true'))
  : console.log(isOfLegalAge(false));
