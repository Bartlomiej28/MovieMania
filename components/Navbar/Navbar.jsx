import React from 'react'
import "./navbar.css";
import Link from 'next/link';


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark shadow-5-strong">
      <div className="container-fluid">
        <div className='links-grid'>
          <span>
            <Link href='/' className="navbar-brand">MovieMania</Link>
          </span>
          <span className='movies-links'>
            <Link href='/' className="movies-link">Popular</Link>
            <Link href='/upcoming-movies' className="movies-link">Upcoming</Link>
            <Link href='/top-rated' className="movies-link">Top Rated</Link>
          </span>
        </div>
        
      </div>
    </nav>
  )
}

export default Navbar



