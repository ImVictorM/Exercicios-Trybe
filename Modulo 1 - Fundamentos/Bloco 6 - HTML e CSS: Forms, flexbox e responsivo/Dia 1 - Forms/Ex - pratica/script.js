const submitButton = document.getElementById('submit-button');
submitButton.addEventListener('click', (event) => {
  event.preventDefault();
});
let photoShareCheckBox = document.getElementById('photo-check');
photoShareCheckBox.addEventListener('click', () => {
  if (photoShareCheckBox.checked) {
    document.getElementById('insert-photo').style.display = 'block';
  } else {
    document.getElementById('insert-photo').style.display = 'none';
  }
});
