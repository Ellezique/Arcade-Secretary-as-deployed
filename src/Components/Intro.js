export default function Intro(props){
    return(
        <>
        <p>Type as fast as you can</p>
        <button onClick={()=>{props.setGameStart("start")}}>Play</button>
        </>
    )
}