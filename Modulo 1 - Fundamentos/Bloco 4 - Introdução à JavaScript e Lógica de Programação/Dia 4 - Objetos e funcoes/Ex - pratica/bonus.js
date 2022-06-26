function converterAlgarismo(string) {
    string = string.toLowerCase();
    let algarismos = {
        "i": 1,
        "v": 5,
        "x": 10,
        "l": 50,
        "c": 100,
        "d": 500,
        "m": 1000,
    }
    let valores = [];

    //transforma string em array de numeros
    for (let index = 0; index < string.length; index += 1) {
        for (let chave in algarismos) {
            if (chave === string[index]) {
                valores.push(algarismos[chave]);
            }
        }
    }
    //validação caracteres invalidos
    if(valores.length < string.length){
        return "[ERROR] um ou mais caracteres não pertencem a algarismos romanos."
    }
    //validação antecedentes
    for(let index = 0; index < valores.length; index += 1) {
        let proximo = index + 1;
        if(valores[index] === 1) {
            if(valores[proximo] > 10){
                return "[ERROR]"
            }
        } else if(valores[index] === 10) {
            if(valores[proximo] > 100) {
                return "[ERROR]"
            }
        } else if (valores[index] === 50) {
            if(valores[proximo] > 50) {
                return "[ERROR]"
            }
        } 
    }

    //validação repetição de algarismos
    for(let index = 0; index < valores.length; index += 1){
        let repeticoes = 0;
        for(let valor of valores){
            if(valores[index] === valor){
                repeticoes += 1;
            }
            if(repeticoes > 3){
                return "[ERROR] numero de repetições maximo excedido"
            }
        }
    }
    console.log(valores);

    let valorCheio = null;
    let index = 0;
    while (index < valores.length) {

        if (valores[index] > valores[index + 1]) {  //primeiro maior que segundo
            if(valores[index + 2] > valores[index + 1]){
                valorCheio += (valores[index] + (valores[index + 2] - valores[index + 1]));
                index += 3;
            } else if (valores[index + 1] === valores[index + 2] && valores[index + 1] === valores[index + 3]) {
                valorCheio += valores[index];
                valorCheio += (valores[index + 1] + valores[index + 2] + valores[index + 3]);
                index += 4;
            } else if (valores[index + 1] === valores[index + 2]) {
                valorCheio += valores[index];
                valorCheio += (valores[index + 1] + valores[index + 2]);
                index += 3;
            } else if (valores[index] === valores[index + 2]) {
                valorCheio += ((valores[index + 2] - valores[index + 1]) + valores[index]);
                index += 3
            } else {
                valorCheio += (valores[index] + valores[index + 1]);
                index += 2;
            }
        } else if (valores[index] === valores[index + 1]) { //sequencia de iguais
            if (valores[index + 1] === valores[index + 2]) {
                valorCheio += (valores[index] + valores[index + 1] + valores[index + 2]);
                index += 3;
            } else {
                valorCheio += (valores[index] + valores[index + 1]);
                index += 2;
            }

        } else if (valores[index] < valores[index + 1]) { //sucessor ser maior que anterior
            valorCheio += (valores[index + 1] - valores[index]);
            index += 2;
        } else { // proximo valor === undefined;
            valorCheio += valores[index];
            break;
        }
    }

    //validação valor maximo
    let valorMaximoPossivel = 3999;
    if(valorCheio > valorMaximoPossivel){
        return "[ERROR]";
    }
    
    return valorCheio;
}

console.log(converterAlgarismo("cccc"));