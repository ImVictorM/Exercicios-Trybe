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
    if (valores.length < string.length) {
        return "[ERROR] um ou mais caracteres não pertencem a algarismos romanos."
    }
    //validação antecedentes
    for (let index = 0; index < valores.length; index += 1) {
        let proximo = index + 1;
        if (valores[index] === 1) {
            if (valores[proximo] > 10) {
                return "[ERROR]";
            }
        } else if (valores[index] === 5) {
            if (valores[proximo] > 5) {
                return "[ERROR]"
            }
        } else if (valores[index] === 10) {
            if (valores[proximo] > 100) {
                return "[ERROR]";
            }
        } else if (valores[index] === 50) {
            if (valores[proximo] > 50) {
                return "[ERROR]";
            }
        } else if (valores[index] === 500) {
            if (valores[proximo] > 500) {
                return "[ERROR]";
            }
        }
    }
    //validação exceção numero 1
    for (let index = 0; index < valores.length; index += 3) {
        if (valores[index] === 1 && valores.length >= index + 3) {
            return "[ERROR]";
        }
    }

    //validação repetição de algarismos
    for (let index = 0; index < valores.length; index += 1) {
        let repeticoes = 0;
        for (let secondIndex = 0; secondIndex < valores.length; secondIndex += 1) {
            if (valores[index] === valores[secondIndex]) {
                repeticoes += 1;
            }
            if (repeticoes > 3) {
                return "[ERROR] numero de repetições maximo de um algarismo excedido";
            }
        }
    }

    console.log(valores);

    // soma
    let valorCheio = null;
    let index = 0;
    while (index < valores.length) {
        let proximo = index + 1;
        if (valores[index] > valores[proximo]) {  //primeiro maior que segundo
            if (valores.length >= index + 3) {
                if (valores[proximo] > valores[proximo + 1]) {
                    valorCheio += (valores[index] + (valores[proximo + 1] - valores[proximo]));
                    index += 3;
                } else {
                    valorCheio += ((valores[proximo + 1] - valores[proximo]) + valores[index]);
                    index += 3;
                }
            } else {
                valorCheio += (valores[index] + valores[proximo]);
                index += 2;
            }
        } else if (valores[index] === valores[proximo]) { //sequencia de iguais
            if (valores[proximo] === valores[proximo + 1]) {
                valorCheio += (valores[index] + valores[proximo] + valores[proximo + 1]);
                index += 3;
            } else {
                valorCheio += (valores[index] + valores[proximo]);
                index += 2;
            }
        } else if (valores[index] < valores[proximo]) { //sucessor ser maior que anterior
            valorCheio += (valores[proximo] - valores[index]);
            index += 2;
        } else { // proximo valor === undefined;
            valorCheio += valores[index];
            break;
        }
    }

    //validação valor maximo
    let valorMaximoPossivel = 3999;
    if (valorCheio > valorMaximoPossivel) {
        return "[ERROR] valor maximo excedido";
    }

    return valorCheio;
}

console.log(converterAlgarismo("xxicc"));