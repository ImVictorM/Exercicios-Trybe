function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

let ul = document.getElementById('days');
function isHoliday(number) {
  let holidayDays = [24, 25, 31];
  if (holidayDays.includes(number)) {
    return true;
  }
  return false;
}
function isFriday(number) {
  let friday = [4, 11, 18, 25];
  if(friday.includes(number)) {
    return true;
  }
  return false;
}

for (let index = 0; index < decemberDaysList.length; index += 1) {
  let listItem = document.createElement('li');
  listItem.classList.add('day');
  ul.appendChild(listItem);
  listItem.innerText = decemberDaysList[index];
  if (isHoliday(decemberDaysList[index])) {
    listItem.classList.add('holiday');
  }
  if (isFriday(decemberDaysList[index])) {
    listItem.classList.add('friday');
  }
}

let holidayButton = document.createElement('button');
function createHolidayButton(string) {
  holidayButton.classList.add('btn-holiday');
  holidayButton.innerText = string;
  document.getElementsByClassName('buttons-container')[0].appendChild(holidayButton);
}

createHolidayButton('Feriados');

holidayButton.addEventListener('click', function() {
  let holidays = document.getElementsByClassName('holiday');
  for (let day of holidays) {
    if (day.style.backgroundColor === 'rgb(250, 221, 221)') {
      day.style.backgroundColor = 'rgb(238,238,238)';
    } else {
      day.style.backgroundColor = 'rgb(250, 221, 221)';
    }
  }
});

let fridayButton = document.createElement('button');
function createFridayButton(string) {
  fridayButton.id = 'btn-friday';
  fridayButton.innerText = string;
  document.getElementsByClassName('buttons-container')[0].appendChild(fridayButton);
}
createFridayButton('Sexta-feira');
 