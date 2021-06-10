import React from "react";

export default function Finish(props) {
  console.log("from finish component");
  return (
    <>
      <p>Finish</p>
      <p>Score: {props.score}</p>
      <p>Accuracy: {props.accuracy}%</p>
      <p>WMP: {props.wordsPerMin}</p>
      <button
        onClick={() => {
          props.setGameStart("start");
        }}
      >
        Replay
      </button>
    </>
  );
}
