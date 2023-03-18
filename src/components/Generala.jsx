import React, { useState } from 'react'

export default function Generala() {
const [diceOne, setDiceOne] = useState(0);
const [diceTwo, setDiceTwo] = useState(0);
const [diceThree, setDiceThree] = useState(0);
const [diceFour, setDiceFour] = useState(0);
const [diceFive, setDiceFive] = useState(0);
const [diceSix, setDiceSix] = useState(0);
const [diceStair, setDiceStair] = useState(0);
const [diceFull, setDiceFull] = useState(0);
const [dicePoker, setDicePoker] = useState(0);
const [diceGenerala, setDiceGenerala] = useState(0);
const [diceDouble, setDiceDouble] = useState(0);
const arrDiceOne = [0,1,2,3,4,5];
const arrDiceTwo = [0,2,4,6,8,10];
const arrDiceThree = [0,3,6,9,12,15];
const arrDiceFour = [0,4,8,12,16,20];
const arrDiceFive = [0,5,10,15,20,25];
const arrDiceSix = [0,6,12,18,24,30];
const arrDiceStair = [0,20,25];
const arrDiceFull = [0,30,35];
const arrDicePoker = [0,40,45];
const arrDiceGenerala = [0,50];
const arrDiceDouble = [0,50];

function diceOneFunction() {
  setDiceOne(diceOne + 1);
  if( diceOne  > 5  ){
    setDiceOne(0);
  }
}

function diceTwoFunction() {
  setDiceTwo(diceTwo + 1);
  if( diceTwo  > 5  ){
    setDiceTwo(0);
  }
}

function diceThreeFunction() {
  setDiceThree(diceThree + 1);
  if( diceThree  > 5  ){
    setDiceThree(0);
  }
}

function diceFourFunction() {
  setDiceFour(diceFour + 1);
  if( diceFour  > 5  ){
    setDiceFour(0);
  }
}

function diceFiveFunction() {
  setDiceFive(diceFive + 1);
  if( diceFive  > 5  ){
    setDiceFive(0);
  }
}

function diceSixFunction() {
  setDiceSix(diceSix + 1);
  if( diceSix  > 5  ){
    setDiceSix(0);
  }
}

function diceStairFunction() {
  setDiceStair(diceStair + 1);
  if( diceStair  > 2  ){
    setDiceStair(0);
  }
}

function diceFullFunction() {
  setDiceFull(diceFull + 1);
  if( diceFull  > 2  ){
    setDiceFull(0);
  }
}

function dicePokerFunction() {
  setDicePoker(dicePoker + 1);
  if( dicePoker  > 2  ){
    setDicePoker(0);
  }
}

function diceGeneralaFunction() {
  setDiceGenerala(diceGenerala + 1);
  if( diceGenerala  > 1  ){
    setDiceGenerala(0);
  }
}

function diceDoubleFunction() {
  setDiceDouble(diceDouble + 1);
  if( diceDouble  > 1  ){
    setDiceDouble(0);
  }
}

  return (
    <div className="App">
        <div className="container-main">
          <div className="container">
            <div className="row-static"></div>
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
            <div className="row-static">TOTAL</div>
          </div>
          <div className="container">
            <div className="row-static"><input type="text" className="input-generala-name" maxLength={4}/></div>
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
            <div className="row-static">0</div>
          </div>
          <div className="container">
            <div className="row-static"><input type="text" className="input-generala-name" maxLength={4}/></div>
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
            <div className="row-static">0</div>
          </div>
          <div className="container">
            <div className="row-static"><input type="text" className="input-generala-name" maxLength={4}/></div>
            <div className="row"  onClick={diceOneFunction}>{arrDiceOne[diceOne]}</div>
            <div className="row"  onClick={diceTwoFunction}>{arrDiceTwo[diceTwo]}</div>
            <div className="row"  onClick={diceThreeFunction}>{arrDiceThree[diceThree]}</div>
            <div className="row"  onClick={diceFourFunction}>{arrDiceFour[diceFour]}</div>
            <div className="row"  onClick={diceFiveFunction}>{arrDiceFive[diceFive]}</div>
            <div className="row"  onClick={diceSixFunction}>{arrDiceSix[diceSix]}</div>
            <div className="row"  onClick={diceStairFunction}>{arrDiceStair[diceStair]}</div>
            <div className="row"  onClick={diceFullFunction}>{arrDiceFull[diceFull]}</div>
            <div className="row"  onClick={dicePokerFunction}>{arrDicePoker[dicePoker]}</div>
            <div className="row"  onClick={diceGeneralaFunction}>{arrDiceGenerala[diceGenerala]}</div>
            <div className="row"  onClick={diceDoubleFunction}>{arrDiceDouble[diceDouble]}</div>
            <div className="row-static">{}</div>
          </div>
        </div>
      </div>
  )
}