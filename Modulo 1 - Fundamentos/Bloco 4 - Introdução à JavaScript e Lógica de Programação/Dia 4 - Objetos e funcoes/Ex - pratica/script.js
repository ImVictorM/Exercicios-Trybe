// 1
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
console.log('Bem-vinda, ', info.personagem);

// 2
info.recorrente = 'Sim';
console.log(info);

// 3
for (let key in info) {
    console.log(key);
}

//4
for (let key in info) {
    console.log(info[key]);
}