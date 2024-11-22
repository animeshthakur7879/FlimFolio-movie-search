import React, { useContext, useState } from 'react'
import fetchSearch from '../providers/MovieProvider/MovieSearch';
import MovieContext from '../providers/MovieProvider/MovieContext';
import { toast } from 'react-toastify';


const Navbar = () => {

  const [movieName , setMovieName] = useState("")
  const {movieData , dispatch} = useContext(MovieContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    getMovies(movieName);
    setMovieName("")

  }

  const getMovies = async (name) => {
    const data = await fetchSearch(name) ;
    if(data.length === 0){
      toast.error("No Movies Found!!")
    }
    else
    {
      dispatch({
        type : "SEARCH" ,
        payload : data
      })
    }
    
  }

  return (
      <nav id='navbar' className="fixed-top navbar px-4 py-2 shadow-lg">
        <div className="container-fluid">
            <a onClick={(e) => location.reload()} style={{color : '#C8ACD6'}} className="fs-2 fw-semibold navbar-brand ">FlimFolio</a>
            <form onSubmit={(e)=>handleSubmit(e)} className="d-flex" role="search">
            <input onChange={(e) => setMovieName(e.target.value)} value={movieName} className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button id='searchBtn' className="btn btn-primary border-0 px-3" type="submit">Search</button>
            </form>
        </div>
       </nav>
  )
}

export default Navbar
