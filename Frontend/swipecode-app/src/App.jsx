import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NavBar from './components/navbar'
import GetStarted from './components/getstarted'
import HomePage from './pages/homepage'

import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/start" element={<GetStarted/>}></Route>
      </Routes>
    </Router>
  )
}

{/* <Routes>
<Route path="/get-started" element={<GetStarted/>}/>
</Routes> */}

export default App
