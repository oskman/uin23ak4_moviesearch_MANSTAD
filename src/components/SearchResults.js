import React,{useState} from 'react';
import MovieCard from './MovieCard';
import Getmovie from "./Getmovie";

const SearchResults = ({data}) => {
    const [moviesInfo,setMoviesInfo] = useState([]);
    data.then((a)=>{ setMoviesInfo(a.Search)});
    
    return (
        <div>
            {moviesInfo.map((info) =>
                <MovieCard movie={Getmovie(info.Title)}/>
            )}
                 
        </div>
    )
};

export default SearchResults;