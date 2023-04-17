import React from "react";

const Getmovie = (searchValue) => {
    const API_KEY = "b15a46f1";
    const val = searchValue;
    const URL = `https://www.omdbapi.com/?t=${val}&apikey=${API_KEY}`;
    

    const movie = fetch(URL)
        .then((response) => response.json())
        .then((movie) => {return movie});
    
    

    return movie;
    

  };

export default Getmovie;