import React from 'react'

const MovieCard = ({movie}) => {

  return (
    <div className="col-md-3 my-5 ">
            <div class="card movie-card shadow-lg">
              <div class="image-container">
                <img 
                style={{height : "350px"}}
                  src = {`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`} 
                  class="movie-poster" 
                  alt="Movie Poster"
                />
              </div>
              <div class="review-overlay">
                <p class="movie-review">
                  "{movie.overview}"
                </p>
              </div>
              <div style={{backgroundColor : "#433D8B"}} class="card-body text-center">
                <h5 class="fs-5 card-title movie-name">{movie.title}</h5>
                <p class="card-text movie-rating">⭐ {movie.vote_average.toFixed(1)}/10</p>
              </div>
            </div>
          </div>
        
  )
}

export default MovieCard
