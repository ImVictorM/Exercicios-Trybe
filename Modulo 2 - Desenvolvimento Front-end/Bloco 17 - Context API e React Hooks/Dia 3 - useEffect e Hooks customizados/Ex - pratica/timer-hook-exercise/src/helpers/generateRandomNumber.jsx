function generateRandomNumber() {
  const MIN_RANDOM_NUMBER = 1;
  const MAX_RANDOM_NUMBER = 100;
  const number = Math.floor(Math.random() * MAX_RANDOM_NUMBER) + MIN_RANDOM_NUMBER;
  return number;
};

export default generateRandomNumber;