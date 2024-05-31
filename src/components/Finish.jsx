import React from "react";

const Finish = ({ earned, setTimeOut , setStop }) => {
  const handleClick = () => {
    setTimeOut(false);
    setStop(false)
  };
  return (
    <div className="finish">
      <h1>You earned: {earned}</h1>
      <button className="startButton" onClick={handleClick}>
        Start New Quizz
      </button>
    </div>
  );
};

export default Finish;
