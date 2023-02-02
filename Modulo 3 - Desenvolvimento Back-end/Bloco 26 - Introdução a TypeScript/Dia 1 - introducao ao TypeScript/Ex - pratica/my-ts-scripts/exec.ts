const readlineSync = require('readline-sync');

function exec(functionToExec: Function): void {
  const value: number = readlineSync.question('Value: ');
  const baseUnit: string = readlineSync.question('Base unit: ');
  const unitToConvert: string = readlineSync.question('Convert to: ');
  const result = functionToExec(value, baseUnit, unitToConvert);
  console.log(`${value}${baseUnit} = ${result}${unitToConvert}`);
}

module.exports = exec;