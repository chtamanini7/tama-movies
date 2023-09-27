
import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';
import GeneralaPlayerColumn from './GeneralaPlayerColumn';

export default function Generala() {
  const {players,resetValues,calculateTotal} = useContext(AppContext);

  return (
    <div className="App">
        <div className="container-main-generala">
          <div className="container-generala">
            <div className="row-static-dynamic" onClick={() => resetValues()}>RESET</div>
            <div className="row-static">1</div>
            <div className="row-static">2</div>
            <div className="row-static">3</div>
            <div className="row-static">4</div>
            <div className="row-static">5</div>
            <div className="row-static">6</div>
            <div className="row-static">Escalera</div>
            <div className="row-static">Full</div>
            <div className="row-static">Poker</div>
            <div className="row-static">Generala</div>
            <div className="row-static">Doble</div>
            <div className="row-static-dynamic" onClick={() => calculateTotal()}>TOTAL</div>
          </div>
          {players.map((player) =>
            <GeneralaPlayerColumn key={player.name} player={player} />
          )}
        </div>
      </div>
  )
}




