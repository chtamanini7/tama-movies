import React, { useState } from 'react'

export default function TrucoCounter() {
  const [ellosCounter, setEllosCounter] = useState(0);

  const renderer = () =>{
    return(
      <>
        <div style={{ border: '1px solid yellow'}}>a</div>
      </>
    )
  }

    return (
      <div className="App">
        <div className="container-main-truco">
          <div className="container-truco-header">
            <div style={{ border: '1px solid green', height: '5vh', width: '20vh', margin: '1px'}}>
              ELLOS
            </div>
            <div style={{ border: '1px solid red', height: '5vh', width: '20vh', margin: '1px'}}>
              NOSOTROS
            </div>
          </div>
          <div className="container-truco">
            <div style={{ border: '1px solid green', height: '40vh', width: '20vh', margin: '1px'}} >
              <div className='counter-truco' style={{ height: '40vh', width: '20vh' }}><p>{ellosCounter}</p></div>
              <div className='plus-truco' style={{ border: '2px solid cyan', height: '20vh', width: '20vh'}} onClick={() => setEllosCounter(ellosCounter-1)}>-</div>
              <div className='minus-truco' style={{ border: '2px solid yellow', height: '20vh', width: '20vh'}} onClick={() => setEllosCounter(ellosCounter+1)}>+</div>
            </div>
            <div style={{ border: '1px solid red', height: '40vh', width: '20vh', margin: '1px'}}>

            </div>
          </div>
        </div>
      </div>
    )
  
}
