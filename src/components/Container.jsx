import React, { useContext, useEffect } from 'react'
import MovieCard from './MovieCard'
import MovieContext from '../providers/MovieProvider/MovieContext'
import fetchTrending from '../providers/MovieProvider/MovieAction'

const Container = () => {
    const {movieData , dispatch}= useContext(MovieContext)

    const getMovies = async() => {
        const data = await fetchTrending()
        dispatch({
            type : "GET_MOVIE" ,
            payload : data
        })
}

useEffect(()=>{
    getMovies()
} , [])
console.log(movieData)

  return (
    <div style={{paddingBlock : "120px"}} id='container'>

        <h1 className="text-center display-3 text-light">
            Trending Movies
        </h1>

        <div className="row g-5  p-5">
        
        {
            movieData.map((movie)=>{
                if(movie.backdrop_path){
                    return(
                        <MovieCard key={movie.id} movie = {movie}/>
                    )
                }
            })
        }
        
        </div>
        
    </div>
  )
}

export default Container
