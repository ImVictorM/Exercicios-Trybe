function numberValidation(number) {
  if (number === 0) {
    return 1;
  }
  if (number < 0) {
    return 'Número inválido';
  }
  return true;
}


let factorial = (number) => {
  let validation = numberValidation(number)
  if (validation !== true) {
    return validation;
  }
  
  let total = number;
  for (let decrement = number - 1; decrement > 1 ; decrement -= 1) {
    total *= decrement;
  }
  return total;
}
console.log(factorial(5));


// bonus
const fatorialBonus = (numero) => numero > 1 ? numero * (fatorialBonus (numero - 1)) : numero;
console.log(fatorialBonus(5))