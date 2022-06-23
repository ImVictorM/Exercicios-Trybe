let numero = 10;

let fatorial = numero; 
for(let decremento = numero - 1; decremento > 1 ; decremento -= 1) {
    fatorial *= decremento;
}
console.log(fatorial);