import React from 'react'
import useFetchMovies from "@/hooks/useFetchMovies";
import LoadMore from "@/components/LoadMore/LoadMore";
import Movie from "@/components/Movie/Movie";


async function Popular() {
    const data = await useFetchMovies(1);
  return (
    <div className="row">
        <h1 className="popular-movies-heading">Popular movies</h1>
        {data.map((movie) => (
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

export default Popular