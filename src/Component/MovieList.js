import React from 'react'
import MovieCard from './MovieCard';
  const MovieList = (props) => {
    
    return (((props.movies).map((movie,index) => <MovieCard movie={movie} key={index}/>).length <1 ?
          (
            <div className='col'>
              <h6>Oups!! No result</h6>
            </div>
          ) : (
            props.movies.map((movie,index) => <MovieCard movie={movie} key={index}/>)
            )
    ));
          }

export default MovieList;





