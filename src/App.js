import { useState } from 'react';
import './App.css';
import Generala from './components/Generala';
import ListMovies from './components/ListMovies';
import RandomColors from './components/RandomColors';
import TrucoCounter from './components/TrucoCounter';

function App() {
const [myBool, setmyBool] = useState(1);

function Asd() {
  switch(myBool){
    case 2:
      return(<RandomColors />)
    case 3:
      return(<Generala />)
    case 4:
      return(<TrucoCounter />)
    default:
      return(<ListMovies />)
  }
}

  return (
    <div>
      <div className="App-header">
        <button onClick={() => setmyBool(1)} className="btnHeader">Movies</button>
        <button onClick={() => setmyBool(2)} className="btnHeader">Colors</button>
        <button onClick={() => setmyBool(3)} className="btnHeader">Generala</button>
        <button onClick={() => setmyBool(4)} className="btnHeader">Truco</button>
      </div>
      <div className="App-mid">
        <Asd />
      </div>
    </div>
  );
}

export default App;
