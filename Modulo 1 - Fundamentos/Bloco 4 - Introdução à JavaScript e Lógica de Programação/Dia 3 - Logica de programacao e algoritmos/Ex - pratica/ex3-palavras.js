let array = ['java', 'javascript', 'python', 'html', 'css'];

//maior palavra
let bigger = '';
for(let index = 0; index < array.length; index += 1) {
    if (bigger === ''){
        bigger = array[index];
    } else if (array[index].length > bigger.length) {
        bigger = array[index];
    }
}
console.log(bigger);

//menor palavra
let smaller = '';

for(let index = 0; index < array.length; index += 1){
    if(smaller === ''){
        smaller = array[index];
    } else if (array[index].length < smaller.length) {
        smaller = array[index];
    }
}
console.log(smaller);