//1

function somar (a, b) {
    return a + b;
}
function subtrair (a, b) {
    return a - b;
}
function multiplicar(a, b){
    return a * b;
}
function dividir(a, b) {
    return a / b;
}
function restoDivisao(a, b){
    return a % b;
}
console.log(somar(10, 20));
console.log(subtrair(10, 20));
console.log(multiplicar(10, 20));
console.log(dividir(30, 5));
console.log(restoDivisao(23, 2));


//2

function maiorMenor(x, y) {
    if (x > y) {
        console.log(x);
    } else if (x < y) {
        console.log(y);
    } else {
        console.log("valores iguais");
    }
}

maiorMenor(30, 30);

//3

function maiorEntreTres (n1, n2, n3) {
    if (n1 >= n3 && n1 > n2) {
        console.log(n1);
    } else if (n2 >= n1 && n2 > n3) {
        console.log(n2);
    } else if (n3 >= n2 && n3 > n1) {
        console.log(n3);
    } else {
        console.log("os três numeros são iguais");
    }
}
maiorEntreTres(7, 7, 7);

//4


function isPositive(valor){
    if (valor > 0) {
        console.log("positive");
    } else if (valor < 0) {
        console.log("negative");
    } else {
        console.log(0)
    }
}
isPositive(-10);

//5

function isTriangle (angulo1, angulo2, angulo3) {
    let somaAngulos = angulo1 + angulo2 + angulo3;
    
    if (angulo1 <= 0 || angulo2 <= 0 || angulo3 <= 0){
        console.log("[ERROR] ângulo inválido");
    } else if (somaAngulos != 180) {
        console.log(false);
    } else {
        console.log(true);
    }
}

isTriangle(30, 50, 100);

