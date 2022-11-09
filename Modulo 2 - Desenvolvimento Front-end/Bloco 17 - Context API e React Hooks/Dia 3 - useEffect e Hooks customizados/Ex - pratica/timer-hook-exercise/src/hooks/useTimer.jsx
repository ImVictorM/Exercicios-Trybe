import { useEffect, useState } from 'react';
import generateRandomNumber from '../helpers/generateRandomNumber';

function useTimer() {
  const [ timer, setTimer ] = useState(1);
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
  const [bingo, setBingo] = useState('');

  const bingoHandler = () => {
    const FOUR_SECONDS = 4000;
    if (randomNumber % 3 === 0 || randomNumber % 3 === 0) {
      setBingo('Bingo');
      const bingoId = setTimeout(() => {
        setBingo('');
      }, FOUR_SECONDS);
      return () => clearInterval(bingoId);
    };
  };

  const timerHandler = () => {
    const ONE_SECOND = 1000;
    const INITIAL_TIMER_VALUE = 1;
    const MAX_TIMER_VALUE = 10;
    const timerId = setInterval(() => {
      if (timer < MAX_TIMER_VALUE) {
        setTimer((prevState) => prevState + 1);
      } else {
        setRandomNumber(generateRandomNumber());
        setTimer(INITIAL_TIMER_VALUE);
      }
      
    }, ONE_SECOND);
    return () => clearInterval(timerId);
  };

  useEffect(bingoHandler, [randomNumber]);
  useEffect(timerHandler, [timer]);

  return [timer, randomNumber, bingo];
}

export default useTimer;
