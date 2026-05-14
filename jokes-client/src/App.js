import { useEffect, useState } from 'react';
import './App.css';
import JokeList from './JokeList';
import { BASE_URL } from './baseApiUrl';
 
function App() {
  const [jokes,setJokes] = useState([])
  
  const fetchJoke = async ()=>{
    try{
        const res =  await fetch(`${BASE_URL}/getJokes`)
        const result = await res.json()
        setJokes(result.jokes) 
    }catch(err){
        console.log(err)
        alert("something went wrong")
    }
 
  }


  useEffect(()=>{
   fetchJoke()
  },[])
  return (
    <div className="App">
       <h1>Programming Jokes 2</h1>
       <hr />
       <JokeList jokes={jokes} />
    </div>
  );
}

export default App;
