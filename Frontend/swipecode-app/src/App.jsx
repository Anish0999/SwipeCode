import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NavBar from './components/navbar'
import GetStarted from './components/getstarted'
import HomePage from './pages/homepage'
import QuizCard from './components/quizcard'
import PlayGround from './components/playground'
import ValidAnagram from './components/validAnagram'


import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/start" element={<GetStarted/>}></Route>

        <Route path="/playground" element={<PlayGround/>}></Route>
        <Route path="/validAnagram" element={<ValidAnagram/>}></Route>
        

        <Route path="/card" 
          element={
          <QuizCard
            qName="Valid Anagram"
            qDesc= "What is the primary characteristic of an anagram?"
            qDescFontSize="2rem"

            // "Given two strings s and t, return true if t is an anagram of s, and false otherwise. 
            //     An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
            //     typically using all the original letters exactly once."

            qA= "Compare the lengths of two words. If they are equal, the words are anagrams."
            qB= "Convert each word to an array, sort the arrays, and then compare them."
            qC= "Check if the first letter of the first word is present in the second word."
            qD= "Compare the number of vowels in both words. If the count matches, the words are anagrams."

            Abool= {true}
            Bbool= {false}
            Cbool= {false}
            Dbool= {false}

          />}>
          </Route>

          <Route path="/card1" 
          element={
          <QuizCard
            qName="Valid Anagram"
            qDesc= "Given the nature of anagrams, which of the following methods can be used to check if two words are anagrams?"
            qDescFontSize="2rem"
            
            qA= "Both words have the same length."
            qB= "Both words have the same first letter."
            qC= "Both words have the same first letter."
            qD= "Both words have the same last letter."

            Abool= {false}
            Bbool= {true}
            Cbool= {false}
            Dbool= {false}

          />}>
          </Route>

          


      </Routes>
    </Router>
  )
}

{/* <Routes>
<Route path="/get-started" element={<GetStarted/>}/>
</Routes> */}

export default App
