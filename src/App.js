import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react"
import Gallows from "./Gallows"
import GuessBoard from "./GuessBoard"
let answer = []
let updatedArray = []
let correctGuesses = 0
let guessedLetters = []
let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

function App() {
  const [guesses, setGuesses] = useState(0)
  const [gameState, setGameState] = useState("new")
  const [total, setTotal] = useState(0)
  const [theme, setTheme] = useState(true)

  function newGame() {
    fetch('https://random-word-api.herokuapp.com/word')
      .then(res => res.json())
      .then(data => {
        setGameState("progress")
        answer = data[0].split('')
        const mappedWord = answer.map((x) => {
          updatedArray.push("_")
          return ("_")
        })



      })

  }
  //function checks letters on press, 
  function letterCheck(e) {
    guessedLetters.push(e.target.id)
    document.getElementById(e.target.id).classList.add("show")
    let match = false
    e.persist()
    const n = answer.map((x, index) => {
      // add a counter to track correct guesses 
      if (e.target.innerText.toLowerCase() === answer[index].toLowerCase()) {
        updatedArray[index] = x
        match = true
        correctGuesses = correctGuesses + 1
      }
    })
    if (!match) {
      setGuesses((prev) => prev = prev + 1)
      if (guesses === 6) {
      }

    } else if (correctGuesses === answer.length) {
      setGameState("victor")
      setGuesses(20)
    }
    setTotal((prev) => prev = prev + 1)
  }
  // reset function resets variables 
  function reset() {
    answer = []
    updatedArray = []
    correctGuesses = 0
    guessedLetters = []
    newGame()
    setGuesses(0)
    setGameState("x")
  }

  //function for day and night theme. 
  function changeTheme() {
    const root = document.getElementById("root")
    if (theme) {
      root.classList.remove("day")
      root.classList.add("night")
      document.getElementById("header").style.color = "white"
    } else {
      root.classList.remove("night")
      root.classList.add("day")
      document.getElementById("header").style.color = ""
    }
    setTheme(!theme)
  }
  
  //function builds letter board by checking for already guessed letters. was built to fix rerenders recreating letterboard
  function UpdateLetterBoard() {
    const newArray = alphabet.map((x, index) => {
      const found = guessedLetters.includes(x)
      if (!found) {
        return (<a className={theme ? "" : "text-white"} id={x} onClick={letterCheck} key={index}>{x}</a>
        )
      }
    })
    return newArray
  }


 


  if ((gameState != "new" && gameState != "victor") && guesses < 8) {
    return (<div className={theme ? "background" : ""}>
      <button onClick={changeTheme}>{theme ? "Night" : "Day"}</button>
      <Gallows count={guesses} theme={theme} />
      <GuessBoard word={updatedArray} theme={theme} />
      <div className="row mt-5 row-content">
        <div className="col-10 mx-auto d-flex justify-content-between flex-wrap">
          {UpdateLetterBoard()}
        </div>
        <div className="col-12 mt-5 ">
        </div>
      </div>
    </div>

    )
  }

  if (gameState === "victor") {
    return (
      <div className="background">
        <Gallows count={guesses} />
        <h3 class={theme ? "mt-5 text-center" : "mt-5 text-center text-white"}>{guesses === 20 ? "You Win" : "Better Luck Next Time"} </h3>
        <button onClick={reset} className={theme ? "mx-auto d-block mt-4 btn-lg" : " btn-dark mx-auto d-block mt-4 btn-lg "}>Play Again</button>
      </div>)
  }


  if (guesses !== 8) {
    return (<div className="background">
       <button onClick={changeTheme}>{theme ? "Night" : "Day"}</button>
      <Gallows count={guesses} />
      <div className="row mt-5 row-content">

        <div className="col-12 mt-5 ">
          <button onClick={newGame} className={theme ? "mx-auto d-block mt-4 btn-lg" : " btn-dark mx-auto d-block mt-4 btn-lg "}>New Game</button>
        </div>
      </div>
    </div>
    );
  }


  return (
    <div className="background">
      <Gallows count={guesses} />
      <GuessBoard word={answer} theme={theme} />
      <h3 class={theme ? "mt-5 text-center" : "mt-5 text-center text-white"}>Better Luck Next Time</h3>
      <button onClick={reset} className={theme ? "mx-auto d-block mt-4 btn-lg" : " btn-dark mx-auto d-block mt-4 btn-lg "}>Play Again</button>
    </div>
  )
}
export default App;
