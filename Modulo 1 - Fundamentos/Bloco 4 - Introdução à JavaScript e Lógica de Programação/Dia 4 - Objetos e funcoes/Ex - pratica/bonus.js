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
    for (let index = 0; index < string.length; index += 1) {
        for (let chave in algarismos) {
            if (chave === string[index]) {
                valores.push(algarismos[chave]);
            }
        }
    }
    let valorCheio = null;
    console.log(valores)
    let index = 0
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
    return valorCheio;
}


console.log(converterAlgarismo("mdix"));