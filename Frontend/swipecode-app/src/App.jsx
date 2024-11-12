import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NavBar from './components/navbar'
import GetStarted from './components/getstarted'
import HomePage from './pages/homepage'

import './App.css'

function App() {
  return (
    <div className='page-container'>
      <NavBar/>

        <div className='info-container'>

          {/* <Routes>
            <Route path="/home-page" element={<HomePage/>}></Route>
          </Routes> */}

          <div className='left-div'>
            
          </div>

          <div className='right-div'>

          </div>

        </div>

    </div>
  )
}

{/* <Routes>
<Route path="/get-started" element={<GetStarted/>}/>
</Routes> */}

export default App
