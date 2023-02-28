import React, { useState } from 'react'
import './App.css'
import butcherPigImage from './assets/butcherPig.jpeg'

const App = () => {

  // ACTION ITEM: to make the development process easier there are some preassigned words in the input field, when you are ready for your full user experience delete the test words passed to useState and pass an empty string
  const [userInput, setUserInput] = useState("apple through queen squeal fry fluent")
  const [inputTranslated, setInputTranslated] = useState("")

  // ACTION ITEM: the "myPigLatinCodeHere" function is where you will put your logic to translate the sentence entered by the user into Pig Latin
  const myPigLatinCodeHere = () => {

    // NO MODIFICATION NEEDED: the variable "arrayOfUserInput" will contain the text input from the user split into an array of words
    const arrayOfUserInput = userInput.split(" ")
    console.log("arrayOfUserInput:", arrayOfUserInput)

    // NO MODIFICATION NEEDED: now that we have an array of words, we can map over the array and look at each word
    const translatedWordsArray = arrayOfUserInput.map(eachWord => {
      console.log("eachWord:", eachWord)

      // NO MODIFICATION NEEDED: this code will look at each word and identify the vowels
      const vowelsArray = eachWord.toLowerCase().split("").filter(vowel => { // Added .toLowerCase() to include sensitivity for capital vowels
        return (
          vowel === "a" || 
          vowel === "e" || 
          vowel === "i" || 
          vowel === "o" || 
          vowel === "u"
        )
      })
      console.log("vowelsArray:", vowelsArray)

      // ACTION ITEM: your Pig Latin logic goes here!

      // Vowel functionality
      // - Can type any word that begins with a vowel in the text input (e.g. apple)
      // - Can hit the submit button
      // - Can see the words that begin with a vowel translated to Pig Latin and rendered to the page (e.g. appleway)

      // Create logic to identify when words begin with a vowel
      // Look at the first letter at eachWord[0] and compare to the letter at vowelsArray[0] to determine whether the first letter is a vowel
      // Use .toLowerCase() to include capital vowels for comparison
      // If the first letter is a vowel, then concat "way" to the end of eachWord

      // EXAMPLES
      // "apple"[0] => "a"
      // "apple"'s vowelsArray[0] => "a"

      // "eat"[0] => "e"
      // "eat"'s vowelsArray[0] => "e"

      // "apple," => "appleway,"

      if(eachWord[0].toLowerCase() === vowelsArray[0]){
            eachWord = eachWord.concat("way")
      }

      // "Qu" functionality
      // - Can type any word that has a "qu" in the first syllable in the text input (e.g. squeal)
      // - Can hit the submit button
      // - Can see the words that have a "qu" in the first syllable translated to Pig Latin and rendered to the page (e.g. ealsquay)

      // Creating logic to identify when "qu" is in the first syllable
      // Conditional if/else to check if "qu" is in the word, then if it is in the word, do logic
      // If "qu" is in the word, take substring from index 0 to the index before the second vowel
      // then move that substring to the end of the word
      // Add "ay" to the end of the word
      
      else if(eachWord.toLowerCase().indexOf("qu") >= 0){
          let vowel = eachWord.toLowerCase().indexOf(vowelsArray[1])
          let syllable = eachWord.substring(0, vowel)
          eachWord = eachWord.substring(vowel).concat(syllable, "ay")
      }

      // y functionality
      // - Can type any word that has no vowels other than "y" in the text input (e.g. fry)
      // - Can hit the submit button
      // - Can see the words that have no vowels other than "y" translated to Pig Latin and rendered to the page (e.g. yfray)


      // If the vowelsArray is empty, then there is no a, e, i, o, or u in the word
      // Look for y in the word
      // Removing first syllable up to the y
      // Concat the first syllable to the end of the word
      // Concat "ay" to the end of the word

      // vowelsArray.length = 0 // No vowels
      // fry > vowelsArray => []
      // .indexOf("y") > 0 // Has a "y"
      // "fry".indexOf("y") => 2
      // dryly > vowelsArray => []
      // "dryly".indexOf("y") => 2

      // Look for the vowelsArray to find the index of the first vowel
      // Removing substring before that index
      // Concat substring to the end of the word
      // Concat "ay" to the end of the word

      // - Can type any word that starts with one or more consonants in the text input (e.g. through)
      // - Can hit the submit button
      // - Can see the words that start with one or more consonants translated to Pig Latin and rendered to the page (e.g. oughthray)

      // ACTION ITEM: this return will be the output of your Pig Latin'd code
      return eachWord
    })

    // NO MODIFICATION NEEDED: once the code has been modified it gets joined from an array back to a string
    const translatedWords = translatedWordsArray.join(" ")
    console.log("translatedWords:", translatedWords)

    // NO MODIFICATION NEEDED: this will update the inputTranslated variable in state
    setInputTranslated(translatedWords)
  }

  // ACTION ITEM: this method restarts the game by setting the original state, when you are ready for your full user experience delete the test words in setUserInput and pass an empty string
  const restartGame = () => {
    setUserInput("apple through queen squeal fry fluent")
    setInputTranslated("")
  }

  // NO MODIFICATION NEEDED: this method prevents React from refreshing the page unnecessarily
  const setUpPreventDefault = (e) => {
    e.preventDefault()
    myPigLatinCodeHere()
  }

  // NO MODIFICATION NEEDED: this method takes the value of the input and saves it in state
  const handleInput = (e) => {
    setUserInput(e.target.value)
  }

  return (
    <div className="page-container">
      <div className="body-container">
        <h1>Pig Latin Translator</h1>
        <img
          src={butcherPigImage}
          alt="pig with butcher cut names in pig latin"
          className="butcher-pig-image"
        />

        <div className="input-section">
          <h4>Enter phrase to be translated:</h4>
          <input
            type="text"
            className="user-input"
            onChange={handleInput}
            value={userInput}
          />
          <br />
          <button onClick={setUpPreventDefault}>Submit</button>
          <button onClick={restartGame}>Clear</button>
        </div>
        <p>{inputTranslated}</p>
      </div>
      <footer>&copy; 2022 | Coded by: Your Names Here!</footer>
    </div>
  )
}

export default App