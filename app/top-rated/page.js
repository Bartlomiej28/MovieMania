import React from 'react'
import Movie from '@/components/Movie/Movie'
import useFetchTopRatedMovies from '@/hooks/useFetchTopRatedMovies'
import LoadMore from '@/components/LoadMore/LoadMore'
import '../globals.css'

async function page() {
    const topRated = await useFetchTopRatedMovies(1)
  return (
    <section className="home container-fluid">
        <div className="row">
            <h1 className="popular-movies-heading">Top Rated movies</h1>
            {topRated.map((movie) => (
            <Movie
                key={movie.id}
                id={movie.id}
                title={movie.title}
                poster_path={movie.poster_path}
            />
            ))}
            <LoadMore/>
        </div>  
     </section>
  )
}

export default page