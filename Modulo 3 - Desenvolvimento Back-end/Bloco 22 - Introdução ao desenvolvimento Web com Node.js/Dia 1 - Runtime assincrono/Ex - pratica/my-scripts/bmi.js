const readline = require('readline-sync');

function calculateBMI(weight, height) {
  const heightInMeter = height / 100;
  const BMIresult = weight / Math.pow(heightInMeter, 2);
  return BMIresult;
}

function checkCondition(result) {
  if (result < 18.5) {
    return 'Under weight';
  };

  if (result <= 24.9) {
    return 'Normal';
  };
  
  if (result <= 29.9) {
    return 'Overweight';
  };

  if (result <= 34.9) {
    return 'Grade I obesity';
  };

  if (result <= 39.9) {
    return 'Grade II obesity'
  };

  return 'Grade III and IV obesity';
}

function main () {
  const weight = readline.questionFloat("What's your weight (kg)? ");
  const height = readline.questionInt("How tall are you (cm)? ");
  const result = calculateBMI(weight, height);
  const condition = checkCondition(result);
  console.log(`Your BMI is ${result}`);
  console.log(`Your conditions is: ${condition}`);
}

main();