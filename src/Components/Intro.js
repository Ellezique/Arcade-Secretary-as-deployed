import '../App.css';
export default function Intro(props){
    return(
        <div className="App transparent"  >
        <p className="introTitle">Type as fast as you can</p>
        <button className="introButton" style={{margin:"3rem"}}onClick={()=>{props.setGameStart("start")}}>Play</button>
        </div>
    )
}