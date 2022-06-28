document.getElementById('header-container').style.backgroundColor = 'lime';
let mensagensEmergencia = document.querySelectorAll('.emergency-tasks div h3');

for (let each of mensagensEmergencia) {
  each.style.backgroundColor = 'purple';
}
let mensagensNaoEmergencia = document.querySelectorAll('.no-emergency-tasks div h3');
for (let each of mensagensNaoEmergencia) {
  each.style.backgroundColor = 'black';
}

let fundoMensagensEmergencia = document.querySelectorAll('.emergency-tasks');
for (let each of fundoMensagensEmergencia) {
  each.style.backgroundColor = 'salmon';
}

let fundoMensagensNaoEmergencia = document.querySelectorAll('.no-emergency-tasks');
for (let each of fundoMensagensNaoEmergencia) {
  each.style.backgroundColor = 'yellow';
}

document.getElementById('footer-container').style.backgroundColor = 'darkgreen';