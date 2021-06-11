import React from 'react'

import '../App.css';

function Contact() {
    return (
        <div >
            <h1 className="heading">CONTACT</h1>
                <div className="paragraph-container">
                    <div className="container">

                    <p className="paragraph" style={{color: "white"}}>
                        Arcade Secretary is brought to you by the very minds responsible for:
                    </p>

                    <p className="paragraph">
                        <a href="https://github.com/robaElshazly">https://github.com/robaElshazly</a> 
                    </p> 
                    <p className="paragraph">
                        <a href="https://github.com/Ellezique">https://github.com/Ellezique</a> 
                    </p> 
                    <p className="paragraph">
                        <a href="https://github.com/MrAjMann">https://github.com/MrAjMann</a> 
                    </p>     
                    </div>
                </div>
        </div>
    )
}

export default Contact
