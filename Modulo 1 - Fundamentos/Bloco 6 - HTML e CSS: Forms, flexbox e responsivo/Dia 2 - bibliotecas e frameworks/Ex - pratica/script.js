const validate = new  window.JustValidate('#form');

validate
  .addField('#name-input', [
    {
      rule: 'minLength',
      value: 10,
    },
    {
      rule: 'maxLength',
      value: 40,
    },
    {
      rule: 'required',
      errorMessage: 'Name is required',
    },
  ])
  .addField('#email-input', [
    {
      rule: 'minLength',
      value: 10,
    },
    {
      rule: 'maxLength',
      value: 50,
    },
    {
      rule: 'required',
      errorMessage: 'Email is required',
    },
  ])
  .addField('#text-area', [
    {
      rule: 'maxLength',
      value: 500,
    },
  ]);

document.getElementById('insert-photo').style.display = 'none';

let photoShareCheckBox = document.getElementById('photo-check');
photoShareCheckBox.addEventListener('click', () => {
  if (photoShareCheckBox.checked) {
    document.getElementById('insert-photo').style.display = 'block';
  } else {
    document.getElementById('insert-photo').style.display = 'none';
  }
});

const date = document.getElementById('date-input');
date.DatePickerX.init({
  format: 'dd/mm/yyyy',
});

