import React, { useState } from 'react';
import './Counter.css';

function Counter() {
  const [counterValue, setCounterValue] = useState(0);
  const [inputValue, setInputValue] = useState(1);

  const incrementCounter = () => {
    const currentCounterValue = counterValue;
    setCounterValue(currentCounterValue + inputValue)
  };

  const decrementCounter = () => {
    const currentCounterValue = counterValue;
    setCounterValue(currentCounterValue - inputValue)
  };

  const updateInputValue = e => {
    const newInputValue = +e.target.value
    setInputValue(newInputValue)
  }

  return (
    <div>
      <h3 data-testid="header">My Counter</h3>
      <h2 data-testid="counter">{counterValue}</h2>
      <button
        data-testid="add-btn"
        onClick={incrementCounter}
      >+</button>
      <input
        className="text-center"
        data-testid="input"
        type="number"
        defaultValue={inputValue}
        onChange={updateInputValue}
      />
      <button
        data-testid="subtract-btn"
        onClick={decrementCounter}
      >-</button>
    </div>
  );
}

export default Counter;
