import React from 'react'
import {  useContext } from 'react';
import { AppContext } from '../context/AppContext';  

export default function RandomColors() {
  const {setContextColor, contextColor, setTextContextColor, textContextColor} = useContext(AppContext);

  function randomColorInRange(min, max) {
    let num = Math.floor(Math.random() * (max - min + 1)) + min;
    switch(num){
      case 1:
        setTextContextColor("pinkText");
        return "ROSA";
      case 2:
        setTextContextColor('yellowText');
        return "AMARILLO";
      case 3:
        setTextContextColor('greenText');
        return "VERDE";
      case 4:
        setTextContextColor('orangeText');
        return "NARANJA";
      default:
        setTextContextColor('lightblueText');
        return "CELESTE";
    }
  }
  
  const colorHandleClick = () => {
    setContextColor(randomColorInRange(1,5));
  };

  return (
    <div className="App">
      <h2>Choose your color</h2>
      <h3 className={textContextColor}>{contextColor}</h3>
      <button onClick={colorHandleClick} type="button" className="myButton">Random</button>
    </div>
  )
}
