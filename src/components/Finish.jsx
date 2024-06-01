import React from "react";

const Finish = ({ earned, setTimeOut,setEarned,setQuestionNumber }) => {

  function startNewQuiz() {
    setTimeOut(false);
    setEarned('$ 0')
    setQuestionNumber(1)
  }
  return (
    <div className="finish">
      <h1>You earned: {earned}</h1>
      <button className="startButton" onClick={startNewQuiz}>
        Start New Quizz
      </button>
    </div>
  );
};

export default Finish;
