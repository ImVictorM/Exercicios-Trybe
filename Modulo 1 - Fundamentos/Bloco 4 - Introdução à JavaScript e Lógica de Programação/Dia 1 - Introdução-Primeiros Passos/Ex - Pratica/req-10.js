const custo = 100 * 1.2; //custo com imposto de 20%
const valorVenda = 150;

let lucroMilUnidades = (valorVenda - custo) * 1000;

if (custo < 0 || valorVenda < 0) {
    return console.error("[ERROR] valor inválido");
}

console.log("Lucro do produto: ", lucroMilUnidades);