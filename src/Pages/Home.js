import React from 'react'
import { useState, useEffect, useRef} from "react"
import generate from '../Util/WordList'
import Start from '../Components/Start'
import Intro from '../Components/Intro'


const Home = () => {
    const initialWordCount=50
    const wordList= useRef(generate(initialWordCount))
    const [gameStart,setGameStart]= useState("")

    // currentWord is a random word from wordList currently showing , and to be typed by the user
    const initialCurrentWord=wordList.current[Math.floor(Math.random()*wordList.current.length)]
    const [currentWord, setCurrentWord] = useState(initialCurrentWord)

    const [completed, setCompleted] = useState("")  // letters of the currentWord typed so far by the user 

    function onKeyPress(e){
        const typedChar=String.fromCharCode(e.keyCode)
        setCompleted(completed => `${completed}${typedChar}`)
    }
    useEffect(()=>{
        window.addEventListener("keypress", onKeyPress)
        return ()=> window.removeEventListener("keypress", onKeyPress);
    },[])
    useEffect(()=>{
        console.log(gameStart)
      },[gameStart]) 

    function getNextWord(){
        //to get random word from word list with an index ranging from 0 to wordList length-1
        return wordList.current[Math.floor(Math.random()*wordList.current.length)] 
    }

    useEffect(()=> {   
        console.log("word list ",wordList.current)
        console.log("current word",currentWord)
        console.log("completed",completed)  
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

    

    return (
        <div>
            {!gameStart && <Intro setGameStart={setGameStart}/>}
            {gameStart==="start" && <>
            <Start original={currentWord} completed={completed.toLowerCase()} />
            {/* <Input />
            <Score/> */}
            </>}
            
       </div>
      
        
    )
}

export default Home
