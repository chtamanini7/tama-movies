import React, { useState } from "react";
import { stackMovies } from "../utils/dataMovies";

export default function ListMovies() {
    const [number, setNumber] = useState();
    //const [SelectedMovie, setSelectedMovie] = useState();

    function randomNumberInRange(min, max) {

        return Math.floor(Math.random() * (max - min + 1)) + min;
  
    }
  
  
    const numberHandleClick = () => {
        setNumber(randomNumberInRange(0,stackMovies.length-1));
    };
    //localStorage.setItem("key", stackMovies[number]);
    //let selectedMovie = localStorage.getItem("key");

    return (
        <div className="App">
            <button className="btnMoviesToColors">Color Selector</button>
            <h2>Choose your next movie</h2>
            <h3>{stackMovies[number]}</h3>
            <button onClick={numberHandleClick} type="button" className="myButton">Random</button>
        </div>
    )
}