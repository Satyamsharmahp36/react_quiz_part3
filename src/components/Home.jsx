import React, { Component } from 'react'
import {Link} from "react-router-dom"

export default function Home(){

  return(
    <div className='outerDiv'>
    <div className='mainDiv'>
        <h1>Quiz App</h1>
        <Link to='/mainGame'>
          <button>Play</button>
        </Link>
    </div>
  </div>
  )
}
