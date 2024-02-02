import './App.css'
import Home from './components/Home'
import Quiz from './components/Quiz'
import Result from './components/Result'
import { Route, Routes } from 'react-router-dom'
import {Link} from "react-router-dom"

function App() {
  

  return (
    <>
      <Link to="/"></Link>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/mainGame' element={<Quiz/>} ></Route>
        <Route path='/result' element={<Result/>}></Route>
      </Routes>
    </>
  )
}

export default App
