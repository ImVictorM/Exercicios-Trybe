let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
//iteração cada numero e soma de todos os numeros
for (eachNumber of numbers) {
    console.log(eachNumber);
    sum += eachNumber;
}

let average = sum / numbers.length

console.log("Total: ", sum);
console.log("Média: ", average);

if (average > 20) {
    console.log("valor maior que 20");
} else {
    console.log("valor menor ou igual a 20");
}
let maxValue = 0;

//valor maximo
for (let index = 0; index < numbers.length; index += 1) {
    if (maxValue === 0) {
        maxValue = numbers[0];
    } else if (numbers[index] > maxValue) {
        maxValue = numbers[index];
    }
}
console.log("Maior valor da lista: ", maxValue);

let oddCount = 0
for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 !== 0) {
        oddCount += 1;
    }
}

if (oddCount === 0) {
    console.log("Nenhum valor ímpar encontrado");
} else {
    console.log("Quantidade de números ímpares: ", oddCount);
}
