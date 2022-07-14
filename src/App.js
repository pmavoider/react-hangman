import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from "react"
import Gallows from "./Gallows"
import GuessBoard from "./GuessBoard"
let answer = []
let updatedArray = []
let correctGuesses = 0 

function App() {
    const[guesses, setGuesses] = useState(0)
    const [gameState, setGameState] = useState("new")
    const [total , setTotal] = useState(0)
   
  function newGame(){
    fetch('https://random-word-api.herokuapp.com/word')
    .then(res => res.json())
    .then(data =>{
            setGameState("progress")
            answer = data[0].split('')
            const mappedWord = answer.map((x) =>{
              updatedArray.push("_")
              return ("_")})
            
            
        
          })     
    
    }
    //alert(word)
    function letterCheck(e){
      document.getElementById(e.target.innerText.toLowerCase()).classList.add("show")

      let match = false
      e.persist()
      //alert(e.target.innerText)
      
      const n = answer.map((x, index) => {
        // add a counter to track correct guesses 
        if(e.target.innerText.toLowerCase() === answer[index].toLowerCase()){
          updatedArray[index] = x
          match = true
          correctGuesses = correctGuesses + 1
        }
      }) 
       if(!match){
          setGuesses((prev) => prev = prev + 1)
          if (guesses === 6){
            }
        
        }else if(correctGuesses === answer.length){
          setGameState("victor")
          setGuesses(0)
        }
        setTotal((prev) => prev = prev + 1)
    }

    function reset(){
      answer = []
      updatedArray = []
      correctGuesses = 0
      newGame()
      setGuesses(0)
      setGameState("x")
     
    }
  
    
  window.onload = (e) =>{
    const letter = document.getElementById("a")
    letter.addEventListener("hover" , letterCheck)  
  }


  if((gameState != "new" && gameState != "victor") && guesses < 8){
     return(<>
      <Gallows count={guesses} />
      <GuessBoard word={updatedArray}/>
       <div className="row mt-5 row-content">
         <div className="col-10 mx-auto d-flex justify-content-between flex-wrap">
           <a id="a" onClick={letterCheck}>A</a>
           <a id="b" onClick={letterCheck}>B</a>
           <a id="c" onClick={letterCheck}>C</a>
           <a id="d" onClick={letterCheck}>D</a>
           <a id="e" onClick={letterCheck}>E</a>
           <a id="f" onClick={letterCheck}>F</a>
           <a id="g" onClick={letterCheck}>G</a>
           <a id="h" onClick={letterCheck}>H</a>
           <a id="i" onClick={letterCheck}>I</a>
           <a id="j" onClick={letterCheck}>J</a>
           <a id="k" onClick={letterCheck}>K</a>
           <a id="l" onClick={letterCheck}>L</a>
           <a id="m" onClick={letterCheck}>M</a>
           <a id="n" onClick={letterCheck}>N</a>
           <a id="o" onClick={letterCheck}>O</a>
           <a id="p" onClick={letterCheck}>P</a>
           <a id="q" onClick={letterCheck}>Q</a>
           <a id="r" onClick={letterCheck}>R</a>
           <a id="s" onClick={letterCheck}>S</a>
           <a id="t" onClick={letterCheck}>T</a>
           <a id="u" onClick={letterCheck}>U</a>
           <a id="v" onClick={letterCheck}>V</a>
           <a id="w" onClick={letterCheck}>W</a>
           <a id="x" onClick={letterCheck}>X</a>
           <a id="y" onClick={letterCheck}>Y</a>
           <a id="z" onClick={letterCheck}>Z</a>
         </div>
         <div className="col-12 mt-5 ">
         </div>
       </div>
      </>

     )
    
  }
  if (gameState != "new" && guesses === 0){
    <>
      <GuessBoard word={answer} />
      <h3 class="mt-5 text-center">Happy Days!!!</h3>
      <button onClick={reset} class="mx-auto d-block mt-4 btn-lg">Play Again</button>
      </>
    }
 

  if(guesses != 8){
  return (<>
    <Gallows count={guesses} />
     <div className="row mt-5 row-content">
       
       <div className="col-12 mt-5 ">
       <button onClick={newGame} className="btn-lg d-block mx-auto">New Game</button>
       </div>
     </div>
    </>
  );}
  

return(
  <>
  <Gallows count={guesses}/>
  <GuessBoard word={answer} />
  <h3 class="mt-5 text-center">Better Luck Next Time</h3>
  <button onClick={reset} class="mx-auto d-block mt-4 btn-lg">Play Again</button>
  </>
)
}
export default App;
