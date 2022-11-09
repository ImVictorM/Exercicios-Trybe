import React from 'react';
import useTimer from './hooks/useTimer.jsx';

function App() {
  const [ timer, randomNumber, bingo ] = useTimer();
  return (
    <div>
      <p>{timer}</p>
      <p>{randomNumber}</p>
      <p>{bingo}</p>
    </div>
  );
}

export default App;
