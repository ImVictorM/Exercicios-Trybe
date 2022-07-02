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

function changeFontFamily(event) {
  switch(event.target.value) {
    case 'times':
      document.body.style.fontFamily = 'Times New Roman';
      break;
    case 'monospace':
      document.body.style.fontFamily = 'monospace';
      break;
    case 'arial':
      document.body.style.fontFamily = 'Arial';
  }
}

window.onload = function() {
  let darkModeButton = document.getElementById('darkmode-button');
  darkModeButton.addEventListener('click', darkmodeSwitch);

  let fontCOlorButton = document.getElementById('apply-color-button');
  fontCOlorButton.addEventListener('click', changeFontColor);

  let selectFont = document.getElementById('font-select');
  selectFont.addEventListener('click', changeFontFamily);

  let fontSizeField = document.getElementById('font-size-input');
  fontSizeField.addEventListener('click', function() {
    if (fontSizeField.value === '') {
      fontSizeField.value = 18;
    }
  });
  fontSizeField.addEventListener('wheel', function(event){
    if (event.target.value > 29) {
      event.target.value = 29;
    } else if (event.target.value < 19) {
      event.target.value = 19;
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

  let lineSpacingField = document.getElementById('line-spacing-field');
  lineSpacingField.addEventListener('click', function() {
    if (lineSpacingField.value === '') {
      lineSpacingField.value = 20;
    }
  });
  lineSpacingField.addEventListener('wheel', function(event){
    if (event.target.value > 59) {
      event.target.value = 59;
    } else if (event.target.value < 21) {
      event.target.value = 21;
    }
  });

  let lineSpacingButton = document.getElementById('line-spacing-button');
  lineSpacingButton.addEventListener('click', function() {
    if (lineSpacingField.value > 60) {
      document.body.style.lineHeight = '60px';
      lineSpacingField.value = 60;
    } else if (lineSpacingField < 20) {
      document.body.style.lineHeight = '20px';
      lineSpacingField.value = 20;
    } else {
      document.body.style.lineHeight = lineSpacingField.value + 'px';
    }
  });
}
