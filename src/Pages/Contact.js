import React from "react";

import "../App.css";

function Contact() {
  return (
    <div>
      <h1 className="heading">CONTACT</h1>
      <div className="paragraph-container">
        <div className="container">
          <p className="paragraph">Arcade Secretary is brought to you by:</p>

          <p style={{ fontWeight: "700" }}>Roba</p>
          <p className="contactParagraph ">
            <a className="contactLink" href="https://github.com/robaElshazly">
              https://github.com/robaElshazly
            </a>
          </p>
          <p style={{ fontWeight: "700" }}>Gizelle</p>
          <p className="contactParagraph">
            <a className="contactLink" href="https://github.com/Ellezique">
              https://github.com/Ellezique
            </a>
          </p>
          <p style={{ fontWeight: "700" }}>Anthony</p>
          <p className="contactParagraph">
            <a className="contactLink" href="https://github.com/MrAjMann">
              https://github.com/MrAjMann
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
