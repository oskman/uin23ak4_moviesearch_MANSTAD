import React, { useState } from "react";

const Getmovie = (searchValue) => {
    const API_KEY = "b15a46f1";
    /*const URL = `https://www.omdbapi.com/?t=${searchValue}&apikey=${API_KEY}`;*/
    const URL = `https://www.omdbapi.com/?t=batman&apikey=b15a46f1`;

    const searchMovies = async() => {
      try {
        const respons = await fetch(URL);
         const data = await respons.json();
         
         return data;
         
      } catch (error) {
          console.error(error);
      } 
    }
    
    
    return searchMovies();

  };

export default Getmovie;