import React from 'react'

export default function Finish(props){
    console.log("from finish component")
return(
    <>
    <p>Finish</p>
    <button onClick={()=>{props.setGameStart("start")}}>Replay</button>
    </>
)
}