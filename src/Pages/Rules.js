import React from "react";
import scoring_system from "./scoring_system.png";
import "../App.css";

function Rules() {
  return (
    <div className="App">
      <h1 className="heading">RULES</h1>
      <div className="container">
        <p className="paragraph">
          Arcade Secretary is a score-based speed typing game. Secretaries are
          armed with their keyboards and lighting reflexes when they enter the
          fast-paced corporate battlefield where speed and accuracy pave the way
          to victory!
        </p>

        <p className="paragraph">
          Secretaries are given a strict deadline during which they will be
          given words, which they must type and submit as quickly and as
          accurately as super-humanly possible.
        </p>
        <p className="paragraph">
          Secretaries will be rewarded for accuracy and receive one point for
          each character that they typed correctly. Mistakes are a liability!
          If a secretary makes a mistake, they will not get a point for the
          incorrectly typed character.
        </p>
        <p className="paragraph">
        Secretaries race against time! When time runs out, the last word will be discarded. 
        The deadline is reached and the game ends. 
        </p>
        <p className="paragraph">
          Secretaries are then provided with a performance review which will
          include total score, WPM (words per minute) and
          average accuracy per character.
        </p>
        <p className="paragraph">
          Secretaries are immortal and live to battle again, always seeking to
          improve and chase deadline victories.
        </p>
      </div>

      <img
        className="scoring_system"
        src={scoring_system}
        alt="Scoring System"
      />
    </div>
  );
}

export default Rules;
