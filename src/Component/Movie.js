import React, { useEffect } from 'react'
import './Movie.css'
import {motion} from 'framer-motion'
function Movie({movie , control}) {

  useEffect(()=>{
    control.start({
      transition:{duration:4},
    })
  },[ ])

  return (
    <motion.div layout animate={{opacity:1,  transition:{ 
    duration:2 ,damping:60},y:"0vw"}} initial={{y:-1000}} exit={{opacity:0,transition:{duration:2}}} >
      <h2>{movie.title}</h2>
      <motion.img  src={"https://image.tmdb.org/t/p/w500"+movie.backdrop_path} alt="" />
    </motion.div>
  )
}

export default Movie;
