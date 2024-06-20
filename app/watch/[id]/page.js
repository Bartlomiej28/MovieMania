import React from 'react'
import { useFetchMovieDetails } from '@/hooks/useFetchMovieDetails';
import TopRated from '@/components/TopRated/TopRated';
import "./watch.css";
import Image from 'next/image';


async function Watch(props) {
  const imagePath = 'https://image.tmdb.org/t/p/original/';
  const data = await useFetchMovieDetails(props.params.id)

  return (
    <section className='watch container-fluid'>
      
      <div className='row'>
        <div className='movie-container'>
          <div className='movie col-12'>
            <div className='overlay'></div>
            <Image className='movie-poster img-fluid' src={imagePath + data.backdrop_path} alt="movie image" width={2000} height={500} priority={true}/>
          </div>
          <div className='movie-details col-xl-6 col-md-7 col-sm-12'>
              <h1 className='display-3 movie-title'>{data.title}</h1>
              <div className='movie-desc'>{data.overview}</div>
              <div className='movie-buttons'>
                <button className='watch-movie'>Watch Movie</button><button className='more-details'>More Info</button>
              </div>
          </div>
        </div>
        <div className='movie-desc-small-device'>
        <b className='h5'>Overview: </b>  {data.overview}
        </div>
        <div className='other-details col-12'>
          <div className='status'>{data.status}</div>
          <div className='rating'>Rating: {Math.floor(data.vote_average)}/10</div>
          <div className='duration'>Duration: {data.runtime} min.</div>
        </div>
        <h2 className='other-title'>Top Rated Movies</h2>
        <TopRated/>
      </div>
      
      
    </section>
  )
}

export default Watch