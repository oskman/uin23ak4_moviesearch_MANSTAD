import './App.css';
import './css/main.css';
import Layout from './components/Layout';
import React,{useState,useEffect} from 'react';
import SearchResults from './components/SearchResults'
import Getmovies from './components/Getmovies';


const App = () => {
  const onChangeHandler = e => {
    if(e.target.value.length >= 3) {
      search = e.target.value
    }
  };
  let search = "James Bond";
  const [movie, setMovie] = useState(Getmovies({search}));
  
 
  const handleInput= () => {setMovie(Getmovies({search}))};
  

  return (
    <Layout>
      <input type="text" defaultValue="james bond" onChange={onChangeHandler}/>
        <button onClick={handleInput}>search</button>
        <SearchResults data={movie}/>
         
     
    </Layout>
  );
};

export default App;
