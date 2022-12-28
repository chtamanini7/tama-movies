import { useState } from 'react';
import './App.css';
import { stackMovies } from './utils/dataMovies';

function App() {
const [myBool, setmyBool] = useState(true);

function toggleBool() {
  setmyBool(!myBool)
}

  return (
      myBool ? <ListMovies toggleBool={toggleBool} /> : <RandomColors toggleBool={toggleBool} /> 
  );
}

function ListMovies(props) {
  const [number, setNumber] = useState();

  function randomNumberInRange(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;
  
  }
  
  
  const numberHandleClick = () => {
    setNumber(randomNumberInRange(0,stackMovies.length-1));
  };

  return (
    <div className="App-header">
      <button onClick={props.toggleBool} className="btnMoviesToColors">Color Selector</button>
      <h2>Choose your next movie</h2>
      <h3>{stackMovies[number]}</h3>
      <button onClick={numberHandleClick} type="button" className="myButton">Random</button>
    </div>
  )
}

function RandomColors(props) {
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
    <div className="App-header">
      <button onClick={props.toggleBool} className="btnColorsToMovies">Movie Selector</button>
      <h2>Choose your color</h2>
      <h3 className={textColor}>{color}</h3>
      <button onClick={colorHandleClick} type="button" className="myButton">Random</button>
    </div>
  )
}

export default App;
