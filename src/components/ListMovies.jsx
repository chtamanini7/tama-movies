import React, { useEffect } from "react";
import { useState } from "react";
import {addDoc, collection, getDocs} from "firebase/firestore";
import {db} from "../utils/firebase";

export default function ListMovies() {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        getMovies();
    }, [])
    

    function getMovies(){
        const movieCollectionRef = collection(db, 'movies')
        getDocs(movieCollectionRef)
            .then(response => {
                console.log(response);
            })
            .catch(error => console.log(error.message))
    }

    return (
        <div>
            <h2>Choose your next movie</h2>
            <h3>Movie Name</h3>
            <button type="button" name="myButton">Random</button>
        </div>
        
    )
}