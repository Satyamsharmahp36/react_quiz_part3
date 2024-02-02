
import React, { Component, useEffect, useState } from 'react'
import OurData from "/resources/quizQuestion"
import {Link} from "react-router-dom"
// import { useLocation } from 'react-router-dom';

export default function Quiz(){

  // const location = useLocation();
  // const receivedState = location.state;


  const[state,setState]=useState(0);
  const[result,setResult]= useState(0);
  const[wrong,setWrong]=useState(0);
  const[attempted,setAttempt]=useState([]);

const handleNext = () => {
  setState((prevCount) => (prevCount >= 14 ? 0 : prevCount + 1));
};

const handleBack = () => {
  setState((prevCount) => (prevCount <= 1 ? 14 : prevCount - 1));
};

const handleQuit = () => {
  alert('You are Exiting the Game');
  
};


const checkOption=(e)=>{
  let checker = OurData[state];
  let present = e.target.id

    if(checker[present] == checker.answer){
      console.log("done")
      alert('Yes your answer is right');
      if(result<16){
      setResult((previous)=> previous+1)
    }
  }
    else{
      alert('No your answer is wrong');
      setWrong((previous)=>previous+1)
    }
    if(!attempted.includes(state)){
      setAttempt((prev)=>[...prev,state+1])
    }
}

const reset=()=>{
  setState(0);
  setResult(0);
  setWrong(0);
  setAttempt([]);
}





let dataResult={
  correct : result,
  wrong: wrong,
  array : attempted,
}

useEffect(()=>{
    reset()
},[])


  return(
    <div>
        <div className='outerDiv'>
        <div className='mainDiv' id='QuizDiv'>
            <h1 className='blackcolor'>Question</h1>
            <p id='questionNo' className='blackcolor' >{state+1} 0f 15</p>
            <p className='blackcolor'>{OurData[state].question}</p>
            <div className="optionsColumns">
                <div className="options" id='optionA' onClick={(e)=>checkOption(e)}>{OurData[state].optionA}</div>
                <div className="options" id='optionB' onClick={(e)=>checkOption(e)}>{OurData[state].optionB}</div>
                <div className="options" id='optionC' onClick={(e)=>checkOption(e)}>{OurData[state].optionC}</div>
                <div className="options" id='optionD' onClick={(e)=>checkOption(e)}>{OurData[state].optionD}</div>
            </div>
  
            <div className='bottonButton'>            
                <button onClick={handleBack}>Back</button>
                <button onClick={handleNext}>Next</button>
                <Link to= "/result" state={dataResult}>
                <button onClick={handleQuit}>Quit</button>
                </Link>
                <Link to="/result" state={dataResult} >
                <button>Finish</button>
              </Link>
            </div>
        </div>
      </div>

    </div>
  )
}