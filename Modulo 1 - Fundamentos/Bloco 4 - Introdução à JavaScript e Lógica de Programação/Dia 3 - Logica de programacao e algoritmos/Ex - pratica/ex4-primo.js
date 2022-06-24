// numero primo

let primos = [];
for(let number = 2; number <= 50; number += 1){
    if (number === 2 || number === 3 || number === 5){
        primos.push(number);
    }else if(number % 2 !== 0 && number % 3 !== 0 && number % 5 !== 0){
        primos.push(number);
    }
}
//console.log(primos)
console.log("Maior numero primo entre 2 e 50: ", primos[primos.length - 1]);

