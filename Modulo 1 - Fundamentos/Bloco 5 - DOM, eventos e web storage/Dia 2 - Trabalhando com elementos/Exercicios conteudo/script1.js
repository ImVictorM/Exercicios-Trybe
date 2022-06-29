// 1
let elementoOndeEstou = document.getElementById('elementoOndeVoceEsta');
// 2
elementoOndeEstou.parentNode.style.color = 'red';
// 3
elementoOndeEstou.firstElementChild.innerText = 'requisito 3';
let elementoPai = document.getElementById('pai');
// 4
console.log(elementoPai.firstElementChild);
// 5
console.log(elementoOndeEstou.previousElementSibling);
// 6 
console.log(elementoOndeEstou.nextSibling);
// 7
console.log(elementoOndeEstou.nextElementSibling);
// 8
console.log(elementoPai.firstElementChild.nextElementSibling.nextElementSibling);

