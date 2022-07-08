function nameValidation(name) {
  if (name.length < 10 || name.length > 40) {
    return false;
  }
  return true;
}
function emailValidation(email) {
  if (email.length < 10 || email.length > 50) {
    return false;
  }
  return true;
}
function textValidation(text) {
  if (text.length > 500) {
    return false;
  }
  return true;
}
const form = document.getElementById('form');
form.addEventListener('submit', (event) => {
  const name = document.getElementById('name-input').value;
  const email = document.getElementById('email-input').value;
  const text = document.getElementById('text-area').value;
  if (nameValidation(name) && emailValidation(email) && textValidation(text)) {
    window.alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.')
  } else {
    event.preventDefault();
    window.alert('Dados Inválidos')
  }
});

document.getElementById('insert-photo').style.display = 'none';

let photoShareCheckBox = document.getElementById('photo-check');
photoShareCheckBox.addEventListener('click', () => {
  if (photoShareCheckBox.checked) {
    document.getElementById('insert-photo').style.display = 'block';
  } else {
    document.getElementById('insert-photo').style.display = 'none';
  }
});



