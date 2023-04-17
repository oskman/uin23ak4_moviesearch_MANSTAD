import React,{useState} from "react";



const MovieCard = ({movie}) => {
    const [movieInfo,setMovieInfo] = useState([])
    movie.then((a)=>{setMovieInfo(a)})

    if(movieInfo.Title) {
       return (
        <article>
            <ul>
                <li>
                    <img src={movieInfo.Poster} alt="" width="200" height="200"></img>
                    <p>{"Title: "+movieInfo.Title}</p>
                    <p>{"Plot: "+movieInfo.Plot}</p>
                    <p>{"Release date: "+movieInfo.Released}</p>
                    <p>{"Genre: "+movieInfo.Genre}</p>
                    <p>{"Director: "+movieInfo.Director}</p>
                    <p>{"Actors: "+movieInfo.Actors}</p>
                    <p>{"Awards: "+movieInfo.Awards}</p>

                </li>
            </ul>
        </article>
       )
    }
    return (<></>)
}

export default MovieCard;