const clickButton =document.getElementById('click-button');
const countOutput = document.getElementById('click-count');
let clickCount = 0;
clickButton.addEventListener('click', () => {
  clickCount += 1;
  countOutput.innerText = clickCount;
});