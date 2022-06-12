import React, { useState, useContext} from 'react';
import { ModeContext } from '../../../context/ModeContext';

export default function CounterCard() {
const {darkMode, setDarkMode}=useContext(ModeContext);

  let [countNum, setCount] = useState(0);

  let increaseValue = () => {
    setCount((countNum += 1));
  }

  let decreaseValue = () => {
    if (countNum === 0) {
        alert("Stay positive");
    } else {
        setCount((countNum -= 1));
    }
  }

  let resetValue = () => {
    setCount(0);
  }
  
  return (
      <div className={darkMode ? 'counter-card counter-card-dark' : 'counter-card'}>
        <h1> {countNum} </h1>
        <div>
          <button onClick={increaseValue} className='plus-btn'>+</button>
          <button onClick={decreaseValue} className='minus-btn'>-</button>
        </div>
        <br></br>
        <button onClick={resetValue} className='reset-btn'>Reset</button>
      </div>  
    
  );
}
