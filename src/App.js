import { useState } from 'react';
import './App.css';
import Generala from './components/Generala';
import ListMovies from './components/ListMovies';
import RandomColors from './components/RandomColors';
import TrucoCounter from './components/TrucoCounter';

function App() {
const [myPage, setmyPage] = useState(1);

function Selector() {
  switch(myPage){
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
        <button onClick={() => setmyPage(1)} className="btnHeader">Movies</button>
        <button onClick={() => setmyPage(2)} className="btnHeader">Colors</button>
        <button onClick={() => setmyPage(3)} className="btnHeader">Generala</button>
        <button onClick={() => setmyPage(4)} className="btnHeader">Truco</button>
      </div>
      <div className="App-mid">
        <Selector />
      </div>
    </div>
  );
}

export default App;
