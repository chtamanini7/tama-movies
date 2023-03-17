import React, { useState } from 'react'

export default function Generala() {
const [diceOne, setDiceOne] = useState(0);
const arrDiceOne = [0,1,2,3,4,5,6];
let pepo = 3;

  return (
    <div className="App">
        <div className="container-main">
          <div className="container">
            <div className="row"></div>
            <div className="row">1</div>
            <div className="row">2</div>
            <div className="row">3</div>
            <div className="row">4</div>
            <div className="row">5</div>
            <div className="row">6</div>
            <div className="row">Escalera</div>
            <div className="row">Full</div>
            <div className="row">Poker</div>
            <div className="row">Generala</div>
            <div className="row">Doble</div>
            <div className="row">TOTAL</div>
          </div>
          <div className="container">
            <div className="row"><input type="text" className="input-generala-name" maxLength={4}/></div>
            <div className="row">Row 2</div>
            <div className="row">Row 3</div>
            <div className="row">Row 4</div>
            <div className="row">Row 5</div>
            <div className="row">Row 6</div>
            <div className="row">Row 7</div>
            <div className="row">Row 8</div>
            <div className="row">Row 9</div>
            <div className="row">Row 10</div>
            <div className="row">Row 11</div>
            <div className="row">Row 12</div>
            <div className="row">0</div>
          </div>
          <div className="container">
            <div className="row"><input type="text" className="input-generala-name" maxLength={4}/></div>
            <div className="row">Row 2</div>
            <div className="row">Row 3</div>
            <div className="row">Row 4</div>
            <div className="row">Row 5</div>
            <div className="row">Row 6</div>
            <div className="row">Row 7</div>
            <div className="row">Row 8</div>
            <div className="row">Row 9</div>
            <div className="row">Row 10</div>
            <div className="row">Row 11</div>
            <div className="row">Row 12</div>
            <div className="row">0</div>
          </div>
          <div className="container">
            <div className="row"><input type="text" className="input-generala-name" maxLength={4}/></div>
            <div className="row" onClick={() => {setDiceOne(diceOne + 1)}}>{arrDiceOne[pepo]}</div>
            <div className="row">Row 3</div>
            <div className="row">Row 4</div>
            <div className="row">Row 5</div>
            <div className="row">Row 6</div>
            <div className="row">Row 7</div>
            <div className="row">Row 8</div>
            <div className="row">Row 9</div>
            <div className="row">Row 10</div>
            <div className="row">Row 11</div>
            <div className="row">Row 12</div>
            <div className="row">0</div>
          </div>
        </div>
      </div>
  )
}