let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// exercicio 3
let newArray = [];
for(let index = 0; index < numbers.length; index += 1) {
 
    if(numbers[index + 1] == undefined){
        newArray.push(numbers[index] = numbers[index] * 2); 
    } else {
        newArray.push(numbers[index] * numbers[index + 1]);
    }
}
console.log("Novo array: ", newArray)


//exercicio 1 | bubble sort crescente
for(let replayIndex = 0; replayIndex < numbers.length - 1; replayIndex += 1) {
    //console.log("replay numero: ", replayIndex )
    for(let index = 0; index < numbers.length - replayIndex; index += 1) { //numbers.length - replayIndex -> vai "travando" os ultimos números
        //console.log("iteração numero: ", index)
        if(numbers[index] > numbers[index + 1]){
            let biggerNumber = numbers[index];
            let smallerNumber = numbers[index + 1];
            numbers[index] = smallerNumber;
            numbers[index + 1] = biggerNumber; 
            
        }
    }
}
console.log("Ordem crescente: ", numbers);

//exercicio 2 | bubble sort decrescente 
for(let replayIndex = 0; replayIndex < numbers.length -1; replayIndex += 1) {
    for(let index = 0; index < numbers.length - replayIndex; index += 1) {
        if(numbers[index] < numbers[index+1]) {
            let biggerNumber = numbers[index+1];
            let smallerNumber = numbers[index];
            numbers[index] = biggerNumber;
            numbers[index+1] = smallerNumber;
        }
    }
}
console.log("Ordem decrescente: ",numbers);


//ordem crescente 
/*
//vai comparando com as primeiras posições | fiz sem querer
for (let secondIndex = 1; secondIndex < numbers.length; secondIndex += 1) {
    for (let index = 0; index < secondIndex; index += 1) {
        if(numbers[index] > numbers[secondIndex]) {
            let aux = numbers[index];
            numbers[index] = numbers[secondIndex];
            numbers[secondIndex] = aux;
        } 
    }
}
console.log(numbers);
*/