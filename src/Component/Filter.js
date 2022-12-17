import React, { useEffect } from 'react'
import { motion } from 'framer-motion';

function Filter({setGenre,genre,cinema,setFiltered,control}) {

    useEffect(()=>{
        if(genre===0){
            setFiltered(cinema)
            return;
        }
        const fil = cinema.filter((movie)=>movie.genre_ids.includes(genre));
        setFiltered(fil)
    },[genre])
  return (
    <motion.div  animate={{opacity:1,  transition:{ 
      duration:2 ,damping:60},y:"0vw"}} initial={{y:-1000}} exit={{opacity:0}} className='filter-container'>
      <button className={genre===0?"active":""} onClick={()=>setGenre(0)}>All</button>
      <button  className={genre===35?"active":""} onClick={()=>setGenre(35)}>Comedy</button>
      <button className={genre===28?"active":""} onClick={()=>setGenre(28)}>Action</button>
    </motion.div>
  )
}

export default Filter
