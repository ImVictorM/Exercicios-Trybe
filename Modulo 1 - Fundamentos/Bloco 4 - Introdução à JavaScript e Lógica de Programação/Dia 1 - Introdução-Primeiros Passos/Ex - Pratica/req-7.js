let porcentagem = -10;

if (porcentagem < 0 || porcentagem > 100) {
    console.error("[ERROR] porcentagem inválida");
} else if (porcentagem < 50) {
    console.log("F");
} else if (porcentagem < 60) {
    console.log("E");
} else if (porcentagem < 70) {
    console.log("D");
} else if (porcentagem < 80) {
    console.log("C");
} else if (porcentagem < 90) {
    console.log("B");
} else {
    console.log("A");
}