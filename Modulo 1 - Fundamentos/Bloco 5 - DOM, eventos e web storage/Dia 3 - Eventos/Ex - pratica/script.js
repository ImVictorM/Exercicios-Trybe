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
function holiday(number) {
  let holidayDays = [24, 25, 31];
  if (holidayDays.includes(number)) {
    return true;
  }
  return false;
}
function fridayzou(number) {
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
  if (holiday(decemberDaysList[index])) {
    listItem.classList.add('holiday');
  }
  if (fridayzou(decemberDaysList[index])) {
    listItem.classList.add('friday');
  }
}
