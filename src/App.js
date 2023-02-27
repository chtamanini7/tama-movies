import { useState } from 'react';
import './App.css';
import ListMovies from './components/ListMovies';
import RandomColors from './components/RandomColors';

function App() {
const [myBool, setmyBool] = useState(true);

function toggleBool() {
  setmyBool(!myBool)
}

function Asd() {
   return(
    myBool ? <ListMovies toggleBool={toggleBool} /> : <RandomColors toggleBool={toggleBool} />
   )
}

  return (
    <div>
      <div className="App-header">
        <div className="btnHeader">Movies</div>
        <div className="btnHeader">Colors</div>
        <div className="btnHeader">Generala</div>
        <div className="btnHeader">Truco</div>
      </div>
      <div className="App-mid">
        <Asd />
      </div>
    </div>
  );
}

export default App;
