import QuizCard from "./quizcard";
import { useState } from "react";
import { useEffect } from "react";

function ValidAnagram() {
  // const [correct, changeCorrect] = useState(false);
  const [index, changeIndex] = useState(0);

  let correctAnswers = 0;
  let wrongAnswers = 0;

  // Callback function to recieve data from the child
  function getDataFromChild(isCorrect) {
    console.log(isCorrect);

    if (isCorrect) {
      correctAnswers = correctAnswers + 1;
    }

    changeIndex(index + 1);

    console.log("correct answers: " + correctAnswers);
    console.log("index: " + index);
  }

  // useEffect(()=>{console.log(correctAnswers)})

  const questions = [];

  questions.push(
    <QuizCard
      qName="Valid Anagram"
      qDesc="What is the primary characteristic of an anagram?"
      qDescFontSize="2rem"
      // "Given two strings s and t, return true if t is an anagram of s, and false otherwise.
      //     An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
      //     typically using all the original letters exactly once."

      qA="Compare the lengths of two words. If they are equal, the words are anagrams."
      qB="Convert each word to an array, sort the arrays, and then compare them."
      qC="Check if the first letter of the first word is present in the second word."
      qD="Compare the number of vowels in both words. If the count matches, the words are anagrams."
      Abool={true}
      Bbool={false}
      Cbool={false}
      Dbool={false}
      getDataFunction={getDataFromChild}
    />
  );
  questions.push(
    <QuizCard
      qName="Valid Anagram"
      qDesc="Given the nature of anagrams, which of the following methods can be used to check if two words are anagrams?"
      qDescFontSize="2rem"
      qA="Both words have the same length."
      qB="Both words have the same first letter."
      qC="Both words have the same first letter."
      qD="Both words have the same last letter."
      Abool={false}
      Bbool={true}
      Cbool={false}
      Dbool={false}
      getDataFunction={getDataFromChild}
    />
  );

  return <div>{questions[index]}</div>;
}

export default ValidAnagram;
