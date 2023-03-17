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
    
    const scoreModifier = (team, flag) => {
        if(flag){
            if(team === 1){
                setTeamOneScore(teamOneScore + 1);
            }else{
                setTeamTwoScore(teamTwoScore + 1);
            }
        }else{
            if(team === 2 && teamTwoScore > 0){
                setTeamTwoScore(teamTwoScore - 1);
            }else if(team === 1 && teamOneScore > 0){
                setTeamOneScore(teamOneScore - 1);
            }
        }
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
            <div className="movie-counter-father">
                <div className="movie-counter-item">
                    <h5>Team 1</h5>
                    <h4>{teamOneScore}</h4>
                    <button className="myButton" onClick={() => scoreModifier(1,true)}>+</button>
                    <button className="myButton" onClick={() => scoreModifier(1,false)}>-</button>
                </div>
                <div className="movie-counter-item">
                    <h5>Team 2</h5>
                    <h4>{teamTwoScore}</h4>
                    <button className="myButton" onClick={() => scoreModifier(2,true)}>+</button>
                    <button className="myButton" onClick={() => scoreModifier(2,false)}>-</button>
                </div>
            </div>
        </div>
    )
}