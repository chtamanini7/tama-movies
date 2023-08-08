import React, {useState, useContext} from 'react'
import { AppContext } from '../context/AppContext';
import Generala from './Generala'

export default function GeneralaHome() {
    //INSERT NUMBER OF PLAYERS AND THEN SHOULD APPEAR $NUMBEROFPLAYERS_INPUTS Y ESO GUARDARLO EN EL CONTEXT PARA GENERAR LOS OBJETOS DE PLAYER
    const [playersNumber, setPlayersNumber] = useState(0);
    const playersNames = Array(playersNumber).fill('');
    const [flag, setFlag] = useState(true);
    const {addPlayersToGenerala,resetValues} = useContext(AppContext);

    const handleInputButton = (e) =>{
      e.preventDefault();  
      addPlayersToGenerala(playersNames);
      setFlag(flag => !flag);
    }

  return (
    <>
        {flag ? 
        <div className='App'>
          <div className='container'>
            <h3>Insert Number of Players</h3>
            <button onClick={() => resetValues()}> R </button>
            <form onSubmit={handleInputButton}>
              <input 
                value={playersNumber}
                onChange={(e) => setPlayersNumber(Number(e.target.value))}
                type='number'
                className="row-static"
                min={0}
                max={6}
              />

              {Array(playersNumber)
              .fill(0)
              .map((x, idx) => (
                  <input key={idx} placeholder={'Player '+ (idx+1)} className="row-static" min={1} maxLength={3} type='text' onChange={(e) => playersNames[idx] = e.target.value} required />
              ))}
              {playersNumber ? <button type='submit' className="myButton">Add Players</button> : <></>}
            </form>
          </div>
        </div> 
        : 
        <Generala />}
    </>
  )
}