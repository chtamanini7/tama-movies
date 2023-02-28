import React, { useState } from "react";
import { stackMovies } from "../utils/dataMovies";

export default function ListMovies() {
    const [number, setNumber] = useState();
    const [teamOneScore, setTeamOneScore] = useState(0);
    const [teamTwoScore, setTeamTwoScore] = useState(0);
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
            <h2>Choose your next movie</h2>
            <h3>{stackMovies[number]}</h3>
            <button onClick={numberHandleClick} type="button" className="myButton">Random</button>
            <div className="counterFather">
                <div className="movie-counter">
                    <h5>Team 1</h5>
                    <h4>{teamOneScore}</h4>
                    <button onClick={() => setTeamOneScore(teamOneScore + 1)}>+</button>
                    <button onClick={() => setTeamOneScore(teamOneScore - 1)}>-</button>
                </div>
                <div className="movie-counter">
                    <h5>Team 2</h5>
                    <h4>{teamTwoScore}</h4>
                    <button onClick={() => setTeamTwoScore(teamTwoScore + 1)}>+</button>
                    <button onClick={() => setTeamTwoScore(teamTwoScore - 1)}>-</button>
                </div>
            </div>
        </div>
    )
}