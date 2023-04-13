
import './App.css';

import Layout from './components/Layout';
import React,{useState } from 'react';
import Searchbar from './components/Searchbar';
import Getmovie from './components/Getmovie';
import res from './components/tempRes';
import Moviecard from './components/moviecard'

const App = () => {
  const onChangeHandler = e => {
    setSearch(e.target.value)
  };
  const [search, setSearch] = useState('');
  const [movie, setMovie] = useState({});
  console.log(Getmovie({search}));
  
  const handleInput= () => {setMovie(Getmovie({search}))}
 


  return (
    <Layout>
      <input type="text" value={search} onChange={onChangeHandler}/>
        <button onClick={handleInput}>search</button>
      <ul>
          <li>sd</li>
      </ul>
      <Moviecard data={movie}/>
    </Layout>
  );
};

export default App;
