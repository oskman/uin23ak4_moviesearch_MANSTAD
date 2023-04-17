import React, { useState } from "react";

const Getmovie = (searchValue) => {
    const API_KEY = "b15a46f1";
    /*const URL = `https://www.omdbapi.com/?t=${searchValue}&apikey=${API_KEY}`;*/
    const URL = `https://www.omdbapi.com/?t=batman&apikey=b15a46f1`;

    const movie = fetch(URL)
        .then((response) => response.json())
        .then((movie) => {return movie});
        //hvis /?s i lenken kanskje mulig å bruke map til å legge til mange filmer i en liste
    
    const returnMovie = () => {
        movie.then((a) => {return a.Title});
    };
    
    const printMov = () => {
        console.log(movie)
    };
    return movie;
    

  };

export default Getmovie;