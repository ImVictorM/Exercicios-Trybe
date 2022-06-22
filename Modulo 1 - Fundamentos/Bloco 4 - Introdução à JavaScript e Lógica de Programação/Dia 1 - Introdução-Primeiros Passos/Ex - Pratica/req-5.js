const angulo1 = 10;
const angulo2 = 80;
const angulo3 = 90;

let somaAngulos = angulo1 + angulo2 + angulo3;
if (angulo1 <= 0 || angulo2 <= 0 || angulo3 <= 0){
    console.log("[ERROR] ângulo inválido");
} else if (somaAngulos != 180) {
    console.log(false);
} else {
    console.log(true);
}
