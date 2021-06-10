import React from 'react';
import scoring_system from './scoring_system.png';
import '../App.css';

function Rules() {
    return (
        <div className="App" style={{ backgroundImage: "url('images/dont_grow_up.png')" }}>
            <h1 className="heading">RULES</h1>
            <p className="paragraph">
                Arcade Secretary is a score-based speed typing game. Secretaries are armed with their keyboards and lighting reflexes when they enter the fast-paced corporate battlefield where speed and accuracy pave the way to victory!
                <br></br>
                <br></br>
                Secretaries are given a strict deadline during which they will be given words, which they must type and submit as quickly and as accurately as super-humanly possible. Once the secretary finishes typing a word, they must hit the space bar to submit their work before the next word task can be provided. 
                <br></br>
                <br></br>
                Secretaries will be awarded for accuracy and receive one point for each character they typed correctly, but only up until their first mistake! Mistakes are a liability. If a secretary makes a mistake, they will accrue one negative point for the error and each remaining word character. 
                <br></br>
                <br></br>
                Secretaries race against time! Each word has a time limit. If time runs out, the word will not be submitted and word length is deducted from score. The battle moves to the next word. If the secretary submits a word before the word timer runs out, the remaining time will be added to extend their total allocated time.
                <br></br>
                <br></br>
                Secretaries race on until the total game timer runs out and the game ends when they reach their deadline.
                <br></br>
                <br></br>
                Secretaries are then provided with a performance review which will include a positive or negative total score, total time, WPM (words per minute), average accuracy and average time per character.
                <br></br>
                <br></br>
                Secretaries are immortal and live to battle again, always seeking to improve and chasing deadline victories.

            </p>
          
        <img className="scoring_system" src={scoring_system} alt="Scoring System" />
        </div>
    );
}

export default Rules;
