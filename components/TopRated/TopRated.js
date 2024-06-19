import React from 'react'
import useFetchTopRatedMovies from '@/hooks/useFetchTopRatedMovies';
import Movie from '../Movie/Movie';

async function TopRated() {

  const topRated = await useFetchTopRatedMovies(1)

  return (
    <div className='row'>
      {topRated.map((movie)=> 
        <Movie 
          key = {movie.id}
          id = {movie.id}
          title = {movie.title}
          poster_path = {movie.poster_path}/>
      )}
    </div>
  )
}

export default TopRated