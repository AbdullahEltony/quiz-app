import "./App.css";
// react hooks
import { useEffect, useState } from "react";

// components
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";
import Finish from "./components/Finish";

// data
import { questionBank, moneyPyramid } from "./data";

function App() {
  // Initialize state variables
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");
  const [stop, setStop] = useState(false);

// Update earned money based on the current question number
  useEffect(() => {
    if (questionNumber > 1) {
      const mony = moneyPyramid.find((m) => m.id === questionNumber - 1);
      setEarned(mony.amount);
    }
  }, [questionNumber]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <Finish
                earned={earned}
                setTimeOut={setTimeOut}
                setEarned={setEarned}
                setQuestionNumber={setQuestionNumber}
              />
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                      stop={stop}
                      setStop={setStop}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    setStop={setStop}
                    questions={questionBank}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  key={m.id}
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
