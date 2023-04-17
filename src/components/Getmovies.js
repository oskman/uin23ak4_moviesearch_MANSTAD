import React from "react";

const Getmovies = (searchValue) => {
    const API_KEY = "b15a46f1";
    const val = searchValue.search;
    const URL = `https://www.omdbapi.com/?s=${val}&apikey=${API_KEY}`;

    const movie = fetch(URL)
        .then((response) => response.json())
        .then((movie) => {return movie});
    
   
    return movie;
    

  };

export default Getmovies;