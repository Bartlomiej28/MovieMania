"use client"
import React, { useEffect, useState } from 'react'
import  {useInView} from "react-intersection-observer";
import useFetchMovies from '@/hooks/useFetchMovies';
import Movie from '../Movie/Movie';
import Loader from '../Loader'

let page = 2;

function LoadMore() {
  const {ref, inView} = useInView();
  const [data, setData] = useState([]);

  useEffect(()=>{
    if(inView){
        useFetchMovies(page).then((res)=>{
            setData([...data, ...res]);
            page++;
        }); 
    }
  },[inView])

  return (
    <>
        {data.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
          />
        ))}
    
    <section className="home container-fluid" ref={ref}>
        <div className="row">
            <Loader/>
        </div>
    </section>
    </>
  )
}

export default LoadMore