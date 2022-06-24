let n = 5;

for (let linha = 1; linha <= n; linha += 1) {
    let resultado = '';
    for (let coluna = 1; coluna <= n; coluna += 1) {
        resultado += '*';
    }
    console.log(resultado);
}