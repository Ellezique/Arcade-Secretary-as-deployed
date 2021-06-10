import React from 'react';
import scoring_system from './scoring_system.png';
import '../App.css';

function Rules() {
    return (
        <div className="App" style={{ backgroundImage: "url('images/dont_grow_up.png')" }}>
            <h1>RULES</h1>
            <p className="paragraph">THIS IS MY PARAGRAPH</p>
            <img className="scoring_system" src={scoring_system} alt="Scoring System" />
        </div>
    );
}

export default Rules;
