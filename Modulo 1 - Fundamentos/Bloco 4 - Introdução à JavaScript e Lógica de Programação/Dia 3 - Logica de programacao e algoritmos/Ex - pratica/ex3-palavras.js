let array = ['java', 'javascript', 'python', 'html', 'css'];

//maior palavra
let maior = '';
for(let index = 0; index < array.length; index += 1) {
    if (maior === ''){
        maior = array[index];
    } else if (array[index].length > maior.length) {
        maior = array[index];
    }
}
console.log(maior)


// for(let letterIndex = 0; letterIndex < array[index]; letterIndex += 1) {
//     if (letterIndex) {
//         count += 1;
//     }
// }