import React, { useState, useEffect } from 'react';
import './Counter.css';

function Counter() {
  const [counterValue, setCounterValue] = useState(0);
  const [counterClassColor, setCounterClassColor] = useState('');
  const [inputValue, setInputValue] = useState(1);

  const incrementCounter = () => {
    setCounterValue(counterValue + inputValue)
  };

  const decrementCounter = () => {
    setCounterValue(counterValue - inputValue)
  };

  // const setClassByCounterValue = () => {
  //   if (counterValue >= 100) {
  //     return 'green';
  //   }

  //   if (counterValue <= -100) {
  //     return 'red'
  //   }
  // };


  useEffect(() => {
    if (counterValue >= 100) {
      setCounterClassColor('green');
    } else if (counterValue <= -100) {
      setCounterClassColor('red');
    } else {
      setCounterClassColor('');
    }
  }, [counterValue])

  return (
    <div>
      <h3 data-testid="header">My Counter</h3>
      <h2
        data-testid="counter"
        className={counterClassColor}
      >{counterValue}</h2>
      <button
        data-testid="add-btn"
        onClick={incrementCounter}
      >+</button>
      <input
        className="text-center"
        data-testid="input"
        type="number"
        defaultValue={inputValue}
        // onChange={(e) => setInputValue(+e.target.value)}
        onChange={(e) => setInputValue(parseInt(e.target.value))}
      />
      <button
        data-testid="subtract-btn"
        onClick={decrementCounter}
      >-</button>
    </div>
  );
}

export default Counter;
