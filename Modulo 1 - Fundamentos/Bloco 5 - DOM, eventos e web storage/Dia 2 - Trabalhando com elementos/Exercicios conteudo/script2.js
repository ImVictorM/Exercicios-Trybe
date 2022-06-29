// 1
let pai = document.getElementById('pai');
let novoElemento = document.createElement('div');
pai.appendChild(novoElemento);
// 2
let elementoOndeEstou = document.getElementById('elementoOndeVoceEsta');
let novoElemento2 = document.createElement('section');
elementoOndeEstou.appendChild(novoElemento2);
// 3
let elementoPrimeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
let novoElemento3 = document.createElement('p');
elementoPrimeiroFilhoDoFilho.appendChild(novoElemento3);
// 4
console.log(elementoPrimeiroFilhoDoFilho.firstChild.parentElement.parentElement.nextElementSibling);
