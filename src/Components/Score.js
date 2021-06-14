import React from "react";

const Score = (props) => {
  return (
    <div>
      <p className="contactParagraph">Score: {props.score}</p>
    </div>
  );
};

export default Score;
