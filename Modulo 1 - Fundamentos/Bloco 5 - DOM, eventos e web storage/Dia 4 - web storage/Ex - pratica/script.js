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
  let fontSizeField = document.getElementById('font-size-input');
  fontSizeField.addEventListener('click', function() {
    if (fontSizeField.value === '') {
      fontSizeField.value = 18;
    }
  });

  let fontSizeButton = document.getElementById('font-size-button');
  fontSizeButton.addEventListener('click', function() {
    if (fontSizeField.value > 30) {
      document.body.style.fontSize = '30px';
      fontSizeField.value = 30;
    } else if (fontSizeField.value < 18) {
      document.body.style.fontSize = '18px';
      fontSizeField.value = 18;
    } else {
      document.body.style.fontSize = fontSizeField.value + 'px';
    }
  });
}