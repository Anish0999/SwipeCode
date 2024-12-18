import QuizCard from "./quizcard";
import { useState } from "react";
import { useEffect } from "react";

function ValidAnagram() {

  const [index, changeIndex] = useState(0);
  const [correctAnswers, changeCorrectAnswers] = useState(0);

  // Callback function to recieve data from the child
  function getDataFromChild(isCorrect, notSelected) {
    console.log(isCorrect);

    if (isCorrect) {
      changeCorrectAnswers(correctAnswers + 1);
    }

    if (notSelected) {
        changeIndex(index + 1);
    }
  }

  useEffect(()=>{console.log("correct answers: " + correctAnswers);
    console.log("index: " + index);})

  const questions = [];

  questions.push(
    <QuizCard
    key={0}
      qName="Valid Anagram"
      qDesc="What is the primary characteristic of an anagram?"
      qDescFontSize="2rem"
      // "Given two strings s and t, return true if t is an anagram of s, and false otherwise.
      //     An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
      //     typically using all the original letters exactly once."

      qA="Both words have the same length."
      qB="Both words have the same last letter."
      qC="Both words have the same first letter."
      qD="Both words have the same letters, in the same quantities."
      Abool={false}
      Bbool={false}
      Cbool={false}
      Dbool={true}
      getDataFunction={getDataFromChild}
      questionLink={"https://leetcode.com/problems/valid-anagram/description/"}
    />
  );

  questions.push(
    <QuizCard
      key={1}
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
      questionLink={"https://leetcode.com/problems/valid-anagram/description/"}
    />
  );
  
  questions.push(
   
    <QuizCard
      key={2}
      qName="Valid Anagram"
      qDesc="What is the time complexity of the solution that sorts and then compares the arrays?"
      qDescFontSize="2rem"
      qA="O(n)"
      qB="O(nlogn)"
      qC="O(n^2)"
      qD="O(2^n)"
      Abool={false}
      Bbool={true}
      Cbool={false}
      Dbool={false}
      getDataFunction={getDataFromChild}
      questionLink={"https://leetcode.com/problems/valid-anagram/description/"}
    />
  );

  questions.push(
    <QuizCard
      key={3}
      qName="Valid Anagram"
      qDesc="Given the nature of anagrams and the constraints of the problem, can you improve upon the overall time complexity of the sorting solution??"
      qDescFontSize="2rem"
      qA="No, sorting and comparing is the most optimal solution."
      qB="Yes, by using a hashmap to store the count of letters."
      qC="Yes, by checking if the first and last letter of both words are the same."
      qD="No, by comparing the frequency of letters in both words using a frequency counter."

      Abool={false}
      Bbool={true}
      Cbool={false}
      Dbool={false}
      getDataFunction={getDataFromChild}
      questionLink={"https://leetcode.com/problems/valid-anagram/description/"}
    />
  );

  questions.push(
    <QuizCard
      key={4}
      qName="Valid Anagram"
      qDesc="Given the nature of anagrams, which of the following methods can be used to check if two words are anagrams?"
      qDescFontSize="2rem"

      qA="Convert each word to an array, sort the arrays, and then compare them."
      qB="Compare the lengths of two words. If they are equal, the words are anagrams."
      qC="Check if the first letter of the first word is present in the second word."
      qD="Use a frequency counter to compare the number of occurrences of each letter in both words."
    
      Abool={false}
      Bbool={true}
      Cbool={false}
      Dbool={false}

      getDataFunction={getDataFromChild}
      questionLink={"https://leetcode.com/problems/valid-anagram/description/"}
    />
  );

  return <div>{questions[index]}</div>;
}

export default ValidAnagram;
