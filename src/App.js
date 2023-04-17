
import './App.css';

import Layout from './components/Layout';
import React,{useState } from 'react';
import Searchbar from './components/Searchbar';
import Getmovie from './components/Getmovie';
import res from './components/tempRes';
import Moviecard from './components/moviecard'
import GetmovieTest from './components/GetmovieTest'

const App = () => {
  const onChangeHandler = e => {
    setSearch(e.target.value)
  };
  const [search, setSearch] = useState('');
  const [movie, setMovie] = useState(GetmovieTest({search}));
  const [movieInfo,setMovieInfo] = useState([]);
  const listMovieInfo = movieInfo.map((title)=><Moviecard data={title}/>);
  console.log(movieInfo)
  
  const handleInput= () => {setMovie(GetmovieTest({search})); movie.then((a)=>{console.log(a.Title)})}
  const handleInputTST= () => {setMovie(GetmovieTest({search})); movie.then((a)=>{ movieInfo.push(a.Title)}); console.log(movieInfo)}
  //Av en eller annen grunn må search trykkes på 2 ganger før tittel endres, finn ut hvorfor.
 
  

  return (
    <Layout>
      <input type="text" value={search} onChange={onChangeHandler}/>
        <button onClick={handleInputTST}>search</button>
      <ul>
          <li>sd</li>
          {listMovieInfo}
      </ul>
    </Layout>
  );
};

export default App;
