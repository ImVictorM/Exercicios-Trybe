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
// 1
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

// 2
let holidayButton = document.createElement('button');
function createHolidayButton(string) {
  holidayButton.classList.add('btn-holiday');
  holidayButton.innerText = string;
  document.getElementsByClassName('buttons-container')[0].appendChild(holidayButton);
}
createHolidayButton('Feriados');

// 3
holidayButton.addEventListener('click', function () {
  let holidays = document.getElementsByClassName('holiday');
  for (let day of holidays) {
    if (day.style.backgroundColor === 'rgb(250, 221, 221)') {
      day.style.backgroundColor = 'rgb(238,238,238)';
    } else {
      day.style.backgroundColor = 'rgb(250, 221, 221)';
    }
  }
});

// 4
let fridayButton = document.createElement('button');
function createFridayButton(string) {
  fridayButton.id = 'btn-friday';
  fridayButton.innerText = string;
  document.getElementsByClassName('buttons-container')[0].appendChild(fridayButton);
}
createFridayButton('Sexta-feira');

// 5
let fridayDayCountainer = [];
let fridays = document.getElementsByClassName('friday');
for (let day of fridays) {
  fridayDayCountainer.push(day.innerText);
}
fridayButton.addEventListener('click', function () {
  const message = 'Sextou!';
  for (let index = 0; index < fridays.length; index += 1) {
    if (fridays[index].innerText === message) {
      fridays[index].innerText = fridayDayCountainer[index];
    } else {
      fridays[index].innerText = 'Sextou!';
    }
  }
});

// 6
const daysContainer = document.getElementsByClassName('day');
for (let day of daysContainer) {
  day.addEventListener('mouseover', function (event) {
    event.target.style.fontSize = '25px';
  });
  day.addEventListener('mouseout', function (event) {
    event.target.style.fontSize = '20px';
  })
}
// 7
function appendTask(string) {
  let taskElement = document.createElement('span');
  taskElement.innerText = string;
  document.getElementsByClassName('my-tasks')[0].appendChild(taskElement);
}

let addButton = document.getElementById('btn-add');
addButton.addEventListener('click', function () {
  let taskMessage = document.getElementById('task-input').value;
  addColor('yellow');
  appendTask(taskMessage);
});

// 8
function addColor(cor) {
  let div = document.createElement('div');
  div.classList.add('task');
  div.style.backgroundColor = cor;
  document.getElementsByClassName('my-tasks')[0].appendChild(div);
}


