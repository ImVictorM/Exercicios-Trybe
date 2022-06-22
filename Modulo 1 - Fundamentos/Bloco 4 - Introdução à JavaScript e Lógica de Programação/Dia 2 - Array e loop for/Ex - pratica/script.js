let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//iteração cada numero e soma de todos os numeros | ex 1 e 2
let sum = 0;
for (eachNumber of numbers) {
    console.log(eachNumber);
    sum += eachNumber;
}
console.log("Total: ", sum);

//media da lista | ex 3 e 4
let average = sum / numbers.length
console.log("Média: ", average);
if (average > 20) {
    console.log("valor maior que 20");
} else {
    console.log("valor menor ou igual a 20");
}

//valor maximo | ex 5 [foguetinho]
let maxValue = null;
for (let index = 0; index < numbers.length; index += 1) {
    if (maxValue === null) {
        maxValue = numbers[0];
    } else if (numbers[index] > maxValue) {
        maxValue = numbers[index];
    }
}
console.log("Maior valor da lista: ", maxValue);

//contagem impares | ex 6
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

//valor minimo | ex 7
let minValue = null;
for (let index = 0; index < numbers.length; index += 1) {
    if (minValue === null) {
        minValue = numbers[0];
    } else if (numbers[index] < minValue) {
        minValue = numbers[index];
    }
}
console.log("Menor valor da lista: ", minValue);

//array de 1 a 25 | ex 8
let newArray = [];
for(let count = 1; count <= 25; count += 1) {
    newArray.push(count);
}
console.log(newArray);

//array dividido por 2 | ex 9
let halfAnArray = [];
for(let index = 0; index < newArray.length; index += 1) {
    halfAnArray[index] = newArray[index] / 2;
}
console.log(halfAnArray);