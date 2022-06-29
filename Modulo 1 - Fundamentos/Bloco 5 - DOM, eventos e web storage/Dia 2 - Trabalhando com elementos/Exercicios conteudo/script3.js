let paiDoPai = document.getElementById('paiDoPai');
let listaElementos = paiDoPai.firstElementChild.children;

for (let index = listaElementos.length - 1; index >= 0; index -= 1) {
   if (listaElementos[index].id !== 'elementoOndeVoceEsta') {
    listaElementos[index].remove();
   }
}
paiDoPai.firstElementChild.firstElementChild.lastElementChild.remove();

