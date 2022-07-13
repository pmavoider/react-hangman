import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from "react"
import Gallows from "./Gallows"
import GuessBoard from "./GuessBoard"
let answer = []
let updatedArray = []

function App() {
    const[guesses, setGuesses] = useState(0)
    const [gameState, setGameState] = useState("new")
    const [total , setTotal] = useState(0)
   
  function newGame(){
    fetch('https://random-word-api.herokuapp.com/word?length=7')
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
      document.getElementById(e.target.innerText.toLowerCase()).style.display = "none"
      alert(total)
      let match = false
      e.persist()
      //alert(e.target.innerText)
      // need to change to a map
      const n = answer.map((x, index) => {
        if(e.target.innerText.toLowerCase() === answer[index].toLowerCase()){
          updatedArray[index] = x
          match = true
        }
      }) 
       if(!match){
          setGuesses((prev) => prev = prev + 1)
        }
        setTotal((prev) => prev = prev + 1)
    }
  
    
  window.onload = (e) =>{
    const letter = document.getElementById("a")
    letter.addEventListener("hover" , letterCheck)  
  }


  if(gameState != "new"){
     return(<>
      <Gallows count={guesses} />
      <GuessBoard word={updatedArray}/>
       <div className="row mt-5 row-content">
         <div className="col-10 mx-auto d-flex justify-content-between flex-wrap">
           <a onClick={letterCheck} id="a">A</a>
           <a onClick={letterCheck}>B</a>
           <a onClick={letterCheck}>C</a>
           <a onClick={letterCheck}>D</a>
           <a id="e" onClick={letterCheck}>E</a>
           <a onClick={letterCheck}>F</a>
           <a onClick={letterCheck}>G</a>
           <a onClick={letterCheck}>H</a>
           <a onClick={letterCheck}>I</a>
           <a onClick={letterCheck}>J</a>
           <a onClick={letterCheck}>K</a>
           <a onClick={letterCheck}>L</a>
           <a onClick={letterCheck}>M</a>
           <a onClick={letterCheck}>N</a>
           <a onClick={letterCheck}>O</a>
           <a onClick={letterCheck}>P</a>
           <a onClick={letterCheck}>Q</a>
           <a onClick={letterCheck}>R</a>
           <a onClick={letterCheck}>S</a>
           <a onClick={letterCheck}>T</a>
           <a onClick={letterCheck}>U</a>
           <a onClick={letterCheck}>V</a>
           <a onClick={letterCheck}>W</a>
           <a onClick={letterCheck}>x</a>
           <a onClick={letterCheck}>Y</a>
           <a onClick={letterCheck}>Z</a>
         </div>
         <div className="col-12 mt-5 ">
         </div>
       </div>
      </>

     )
    
  }
  function log (){
    console.log("f")
  }

  return (<>
    <Gallows count={guesses} />
     <div className="row mt-5 row-content">
       
       <div className="col-12 mt-5 ">
       <button onClick={newGame} className="btn-lg d-block mx-auto">New Game</button>
       </div>
     </div>
    </>
  );
}

export default App;
