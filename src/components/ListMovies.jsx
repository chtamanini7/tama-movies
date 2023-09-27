import React, { useState, useContext } from "react";
import { stackMovies } from "../utils/dataMovies";
import { AppContext } from "../context/AppContext";

export default function ListMovies() {
    const {contextTeamOne, setContextTeamOne, contextTeamTwo, setContextTeamTwo, contextMovieNumber, setContextMovieNumber} = useContext(AppContext);

    function randomNumberInRange(min, max) {

        return Math.floor(Math.random() * (max - min + 1)) + min;
  
    }
    
    const scoreModifier = (team, flag) => {
        if(flag){
            if(team === 1){
                setContextTeamOne(contextTeamOne + 1);
            }else{
                setContextTeamTwo(contextTeamTwo + 1);
            }
        }else{
            if(team === 2 && contextTeamTwo > 0){
                setContextTeamTwo(contextTeamTwo - 1);
            }else if(team === 1 && contextTeamOne > 0){
                setContextTeamOne(contextTeamOne - 1);
            }
        }
    }
  
    const numberHandleClick = () => {
        setContextMovieNumber(randomNumberInRange(0,stackMovies.length-1));
    };

    return (
        <div className="App">
            <h2>Choose your next movie</h2>
            <h3>{stackMovies[contextMovieNumber]}</h3>
            <button onClick={numberHandleClick} type="button" className="myButton">Random</button>
            <div className="movie-counter-father">
                <div className="movie-counter-item">
                    <h5>Team 1</h5>
                    <h4>{contextTeamOne}</h4>
                    <button className="myButton" onClick={() => scoreModifier(1,true)}>+</button>
                    <button className="myButton" onClick={() => scoreModifier(1,false)}>-</button>
                </div>
                <div className="movie-counter-item">
                    <h5>Team 2</h5>
                    <h4>{contextTeamTwo}</h4>
                    <button className="myButton" onClick={() => scoreModifier(2,true)}>+</button>
                    <button className="myButton" onClick={() => scoreModifier(2,false)}>-</button>
                </div>
            </div>
        </div>
    )
}