import React from 'react'
import MoonLoader from "react-spinners/ClipLoader";
import './loader.css';

function Loader() {
  return (
    <div className='loader-container'>
        <MoonLoader color="#36d7b7" size={120} speedMultiplier={0.6} />
    </div>
  )
}

export default Loader