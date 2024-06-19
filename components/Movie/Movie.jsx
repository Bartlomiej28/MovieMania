import React from 'react'
import Link from 'next/link';
import "./movie.css";
import Image from 'next/image';

function Movie({title, poster_path, id}) {

  const imagePath = 'https://image.tmdb.org/t/p/original/';
  
  return (
    <article className='movie-element col-xl-2 col-md-3 col-sm-6'>
        <Link href={`/watch/${id}`}>
          <div className='movie-details-element'>
              <Image className='poster-element' src={imagePath + poster_path} alt={title} width={500} height={500} loading="lazy"/>
              <div className='movie-title-element'><h5>{title}</h5></div>
          </div>
        </Link>
    </article>
  )
}

export default Movie