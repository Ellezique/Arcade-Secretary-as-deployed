import React from 'react'
import { useState, useEffect, useRef} from "react"
import generate from '../Util/WordList'
import Start from '../Components/Start'
import Score from '../Components/Score'
import Intro from '../Components/Intro'
import GameTimer from '../Components/GameTimer'
import Finish from '../Components/Finish'
import Accuracy from '../Components/Accuracy'
import currentTime from '../Util/Time'
import WordsPerMin from '../Components/WordsPerMin'

const Home = () => {
    const initialWordCount=50
    const wordList= useRef(generate(initialWordCount))
    const [gameStart,setGameStart]= useState("")
    const [score, setScore]= useState(0)
    const [rightLetters,setRightLetters]=useState(0)
    const [accuracy, setAccuracy]=useState(0)
    const [typedCharsCount,setTypedCharsCount]=useState(0)
    const [startTime, setStartTime]=useState(0)
    const [wordCount,setWordCount]=useState(0)
    const [wordsPerMin, setWordsPerMin]=useState(0)

    // currentWord is a random word from wordList currently showing , and to be typed by the user
    const initialCurrentWord=wordList.current[Math.floor(Math.random()*wordList.current.length)]
    const [currentWord, setCurrentWord] = useState(initialCurrentWord)

    const [completed, setCompleted] = useState("")  // letters of the currentWord typed so far by the user 

    const initialTimer=10
    const [gameTimer, setGameTimer] = useState(initialTimer)

    function onKeyPress(e){
        const typedChar=String.fromCharCode(e.keyCode)
        setCompleted(completed => `${completed}${typedChar}`)
        setTypedCharsCount(x => x+1)
    }


    function resetGame(){
       //set score and accuracy here
        setWordsPerMin(0)
        setWordCount(0)
        setStartTime(currentTime())
        setTypedCharsCount(0)
        setRightLetters(0)
        setScore(0)
        setAccuracy(0)
        setCompleted("")
        setCurrentWord(initialCurrentWord)
      }
    useEffect(()=>{
        if(gameStart==="start"){ 
          resetGame()
          console.log("Current Time", currentTime()) 
           setStartTime(currentTime())
          window.addEventListener("keypress", onKeyPress)
          return ()=> window.removeEventListener("keypress", onKeyPress);
          }
          console.log("gameStart",gameStart)  
      },[gameStart]) 

    function getNextWord(){
        //to get random word from word list with an index ranging from 0 to wordList length-1
        return wordList.current[Math.floor(Math.random()*wordList.current.length)] 
    }

    useEffect(()=>{
      console.log("Right Letters", rightLetters)
      console.log("Typed Chars Letters", typedCharsCount)
      setAccuracy((rightLetters/typedCharsCount*100).toFixed(2))
      const durationInMinutes = (currentTime() - startTime) / 60000.0;
      setWordsPerMin(((wordCount) / durationInMinutes).toFixed(2));
      console.log("WordCount",wordCount)
      console.log("WPM",wordsPerMin)
    },[rightLetters,typedCharsCount])
    
    useEffect(()=> {    
      //if completed is right and not empty i.e. there is some letters been typed into it
      if(completed){ 

        //add the score calculating code here 
        if (currentWord[completed.length-1]===completed[completed.length-1]){
          setScore(score=>score+1)
          setRightLetters(rightLetters => rightLetters+1)
          console.log("score",score)
        }else{
          if (!currentWord[completed.length-1]===completed[completed.length-1]){
            setScore(score=>score-1)
            console.log(score)
          }
        }
        
        
            //if completed(the letters typed)  reached the end of the current word
            if(currentWord.length === completed.length){
              setCompleted("")
              setWordCount(wordCount=>wordCount+1)
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
            <Accuracy accuracy={accuracy} />
            <WordsPerMin wordsPerMin={wordsPerMin} />
            <Score score={score}/> 
            {/* <Input />
            <Score/> */}
            </>}
            {gameStart==="finish" && <Finish setGameStart={setGameStart} score={score} accuracy={accuracy} wordsPerMin={wordsPerMin}/>}

            
       </div>
      
        
    )
}

export default Home
