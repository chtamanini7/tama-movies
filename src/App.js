import { useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import GeneralaHome from './components/GeneralaHome';
import ListMovies from './components/ListMovies';
import RandomColors from './components/RandomColors';
import TrucoCounter from './components/TrucoCounter';
import AppContextProvider from './context/AppContext';

function App() {
const [myPage, setmyPage] = useState(1);

  return (
    <BrowserRouter>
      <AppContextProvider>
        <div>
          <div className="App-header">
            <Link to={'/movies'}>
              <button className="btnHeader">Movies</button>
            </Link>
            <Link to={'/colors'}>
              <button className="btnHeader">Colors</button>
            </Link>
            <Link to={'/generala'}>
              <button className="btnHeader">Generala</button>
            </Link>
            <Link to={'/truco'}>
              <button className="btnHeader">Truco</button>
            </Link>
          </div>
          <div className="App-mid">
            <Routes>
              <Route path='/movies' element={<ListMovies />} />
              <Route path='/colors' element={<RandomColors />} />
              <Route path='/generala' element={<GeneralaHome />} />
              <Route path='/truco' element={<TrucoCounter />} />
            </Routes>
          </div>
        </div>
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
