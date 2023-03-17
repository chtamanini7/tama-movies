import React from 'react'
import { useState } from 'react';

export default function RandomColors() {
  const [color, setColor] = useState("ROSA");
  const [textColor, setTextColor] = useState('pinkText');

  function randomColorInRange(min, max) {
    let num = Math.floor(Math.random() * (max - min + 1)) + min;
    switch(num){
      case 1:
        setTextColor("pinkText");
        return "ROSA";
      case 2:
        setTextColor('yellowText');
        return "AMARILLO";
      case 3:
        setTextColor('greenText');
        return "VERDE";
      case 4:
        setTextColor('orangeText');
        return "NARANJA";
      default:
        setTextColor('lightblueText');
        return "CELESTE";
    }
  }
  
  const colorHandleClick = () => {
    setColor(randomColorInRange(1,5));
  };

  return (
    <div className="App">
      <h2>Choose your color</h2>
      <h3 className={textColor}>{color}</h3>
      <button onClick={colorHandleClick} type="button" className="myButton">Random</button>
    </div>
  )
}
