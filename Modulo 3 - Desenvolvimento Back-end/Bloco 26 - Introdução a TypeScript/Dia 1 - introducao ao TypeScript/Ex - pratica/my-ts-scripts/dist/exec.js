"use strict";
const readlineSync = require('readline-sync');
function exec(functionToExec) {
    const value = readlineSync.question('Value: ');
    const baseUnit = readlineSync.question('Base unit: ');
    const unitToConvert = readlineSync.question('Convert to: ');
    const result = functionToExec(value, baseUnit, unitToConvert);
    console.log(`${value}${baseUnit} = ${result}${unitToConvert}`);
}
module.exports = exec;
