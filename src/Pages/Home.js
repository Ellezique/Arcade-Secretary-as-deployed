import React from 'react'
import { useState, useEffect, useRef} from "react"
import generate from '../Util/WordList'
import Start from '../Components/Start'
import Intro from '../Components/Intro'
import GameTimer from '../Components/GameTimer'
import Finish from '../Components/Finish'

const Home = () => {
    const initialWordCount=50
    const wordList= useRef(generate(initialWordCount))
    const [gameStart,setGameStart]= useState("")

    // currentWord is a random word from wordList currently showing , and to be typed by the user
    const initialCurrentWord=wordList.current[Math.floor(Math.random()*wordList.current.length)]
    const [currentWord, setCurrentWord] = useState(initialCurrentWord)

    const [completed, setCompleted] = useState("")  // letters of the currentWord typed so far by the user 

    const initialTimer=60
    const [gameTimer, setGameTimer] = useState(initialTimer)

    function onKeyPress(e){
        const typedChar=String.fromCharCode(e.keyCode)
        setCompleted(completed => `${completed}${typedChar}`)
    }
    useEffect(()=>{
        window.addEventListener("keypress", onKeyPress)
        return ()=> window.removeEventListener("keypress", onKeyPress);
    },[])

    function resetGame(){
       //set score and accuracy here
        setCompleted("")
        setCurrentWord(initialCurrentWord)
      }
    useEffect(()=>{
        if(gameStart==="start"){ 
            resetGame() 
          }
          console.log("gameStart",gameStart)  
      },[gameStart]) 

    function getNextWord(){
        //to get random word from word list with an index ranging from 0 to wordList length-1
        return wordList.current[Math.floor(Math.random()*wordList.current.length)] 
    }

    useEffect(()=> {    
        //if completed is right and not empty i.e. there is some letters been typed into it
        if(completed){ 

            //add the score calculating code here 

            //if completed(the letters typed)  reached the end of the current word
            if(currentWord.length === completed.length){
              setCompleted("")
              setCurrentWord(getNextWord())
              
              //add the word counting code here

            }}
      },[completed])

      useEffect(()=>{
        // if game timer changed to "start", begin the count down
        if(gameStart==="start"){ 
          let myInterval=setInterval(() => {
            if(gameTimer>0){
             // console.log("game timer",gameTimer)
              setGameTimer(gameTimer - 1) 
            }
            else{ //if the timer finished clear the interval, to stop it from counting down
              clearInterval(myInterval) 
              setGameStart("finish")
              setGameTimer(initialTimer)
            }   
            return clearInterval(myInterval)  //to clear interval when App component unmount
            }, 1000)
        }
      },[gameStart,gameTimer])  

    

    return (
        <div>
            {!gameStart && <Intro setGameStart={setGameStart}/>}
            {gameStart==="start" && <>
            <GameTimer gameTimer={gameTimer}/>
            <Start original={currentWord} completed={completed.toLowerCase()} /> 
            {/* <Input />
            <Score/> */}
            </>}
            {gameStart==="finish" && <Finish setGameStart={setGameStart}/>}

            
       </div>
      
        
    )
}

export default Home
