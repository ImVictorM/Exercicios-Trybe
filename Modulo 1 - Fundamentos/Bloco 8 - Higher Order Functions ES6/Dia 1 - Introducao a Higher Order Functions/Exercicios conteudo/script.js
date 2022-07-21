// 1
const wakeUpTime = () => 'Acordando!!';

// 2
const breakfastTime = () => 'Bora tomar café!!';

// 3
const sleepTime = () => 'Partiu dormir!!';

// 4
const doingThings = (func) => console.log(func());

doingThings(wakeUpTime);
doingThings(breakfastTime);
doingThings(sleepTime);
