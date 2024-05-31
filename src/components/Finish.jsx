import React from "react";

const Finish = ({ earned, setTimeOut , setStop,setEarned,setQuestionNumber }) => {
  const handleClick = () => {
    setTimeOut(false);
    setStop(false)
    setEarned('$ 0')
    setQuestionNumber(1)
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
