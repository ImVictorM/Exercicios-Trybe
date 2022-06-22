let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

for (eachNumber of numbers) {
    console.log(eachNumber);
    sum += eachNumber;
}

let average = sum / numbers.length

console.log("Total: ", sum);
console.log("Média: ", average);