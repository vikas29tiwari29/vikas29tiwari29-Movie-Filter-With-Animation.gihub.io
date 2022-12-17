import { useEffect, useState } from 'react';
import './App.css';
import Filter from './Component/Filter';
import Movie from './Component/Movie';
import {motion,AnimatePresence,useAnimation} from 'framer-motion'

function App() {
  const control = useAnimation();
  const[cinema , setCinema]= useState([])
  const[filtered,setFiltered]=useState([])
  const[genre,setGenre]=useState(0)

  useEffect(()=>{
    popularMovies() 
  },[])


   
   const popularMovies = async ()=> { 

    const data = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
    const movies = await data.json();
    console.log(movies.results)
    setCinema(movies.results)
    setFiltered(movies.results)
   } 
  
  return (
    <motion.div  layout className="App">
      <Filter cinema={cinema} setFiltered={setFiltered} genre={genre} setGenre={setGenre} control={control} />
      <motion.div  animate={control} className="popular-movie">
        <AnimatePresence>

      {filtered.map((movie)=>{
        return <Movie key={movie.id} movie={movie} control={control}/>
      })}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

export default App;
