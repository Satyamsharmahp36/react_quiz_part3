import React from 'react'
import { useLocation } from 'react-router-dom';
import {Link} from "react-router-dom"

export default function Result(){

  const location = useLocation();
  const receivedState = location.state;

  

  return(
    <div className='outerDiv'>
        <div className='mainDiv' id='resultMain'>
        <h1>Result</h1>
        <div className='resultCard'>
          
            <h1 className='practice'>Your score is {((receivedState.correct/15)*100).toFixed(2)}%</h1>
            <div>
                <div className="resultData">
                    <span>Total number of question</span>
                    <span>15</span>
                </div>
                <div className="resultData">
                    <span>Number of attempted question</span>
                    <span>{receivedState.array.length}</span>
                </div>
                <div className="resultData">
                    <span>Number of correct options</span>
                    <span>{receivedState.correct}</span>
                </div>
                <div className="resultData">
                    <span>Number of wrong answer</span>
                    <span>{receivedState.wrong}</span>
                </div>
            </div>
        </div>
        <div >
          <Link to="/mainGame">
            <button>Play Again</button>
          </Link>
          <Link to='/'>
            <button>Back To Home</button>
          </Link>
            
        </div>
        </div>
      </div>
  )
}