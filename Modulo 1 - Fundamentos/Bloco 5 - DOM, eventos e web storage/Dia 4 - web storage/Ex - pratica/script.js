function darkmodeSwitch() {
  let darkmodeStatus = document.getElementById('darkmode-status');
  if (document.body.classList.contains('darkmode')) {
    document.body.classList.remove('darkmode');
    darkmodeStatus.innerText = 'OFF';
  } else {
    document.body.classList.add('darkmode');
    darkmodeStatus.innerText = 'ON';
  }
}

function changeFontColor() {
  let colorInput = document.getElementById('color-input').value;
  document.body.style.color = colorInput;
}

function changeFontFamily() {
  
}

window.onload = function() {
  let darkModeButton = document.getElementById('darkmode-button');
  darkModeButton.addEventListener('click', darkmodeSwitch);

  let fontCOlorButton = document.getElementById('apply-color-button');
  fontCOlorButton.addEventListener('click', changeFontColor);

  let selectFont = document.getElementById('font-select');
  selectFont.addEventListener('click', function() {
    switch(selectFont.value) {
      case 'times':
        document.body.style.fontFamily = 'Times New Roman';
        break;
      case 'monospace':
        document.body.style.fontFamily = 'monospace';
        break;
      case 'arial':
        document.body.style.fontFamily = 'Arial';
    }
  });
  
}