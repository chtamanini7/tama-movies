import React, {useContext} from 'react'
import { AppContext } from '../context/AppContext'

export default function GeneralaPlayerColumn({player}) {
  const {playerUpdater} = useContext(AppContext)
  return (
    <div className="container">
        <div className="row-static">{player.name}</div>
          <div className="row" onClick={() => playerUpdater(player.name,"uno")}>{player.uno}</div>
          <div className="row" onClick={() => playerUpdater(player.name,"dos")}>{player.dos}</div>
          <div className="row" onClick={() => playerUpdater(player.name,"tres")}>{player.tres}</div>
          <div className="row" onClick={() => playerUpdater(player.name,"cuatro")}>{player.cuatro}</div>
          <div className="row" onClick={() => playerUpdater(player.name,"cinco")}>{player.cinco}</div>
          <div className="row" onClick={() => playerUpdater(player.name,"seis")}>{player.seis}</div>
          <div className="row" onClick={() => playerUpdater(player.name,"escalera")}>{player.escalera}</div>
          <div className="row" onClick={() => playerUpdater(player.name,"full")}>{player.full}</div>
          <div className="row" onClick={() => playerUpdater(player.name,"poker")}>{player.poker}</div>
          <div className="row" onClick={() => playerUpdater(player.name,"generala")}>{player.generala}</div>
          <div className="row" onClick={() => playerUpdater(player.name,"doble")}>{player.doble}</div>
        <div className="row-static">{player.total}</div>
    </div>
  )
}
