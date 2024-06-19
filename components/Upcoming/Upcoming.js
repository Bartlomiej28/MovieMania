import React from 'react'
import useFetchUpcomingMovies from '@/hooks/useFetchUpcomingMovies'
import Movie from "@/components/Movie/Movie";
import LoadMore from "@/components/LoadMore/LoadMore";

function Upcoming() {
    const upcoming = useFetchUpcomingMovies()
  return (
    <div className="row">
        <h1 className="popular-movies-heading">Upcoming movies</h1>
        {upcoming.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
          />
        ))}
        <LoadMore/>
    </div>  
  )
}

export default Upcoming