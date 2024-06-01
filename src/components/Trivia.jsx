// hooks
import { useEffect, useState } from "react";
import useSound from "use-sound";

// audios
import play from "../sounds/play.mp3";
import correct from "../sounds/correct.mp3";
import wait from "../sounds/wait.mp3";
import wrong from "../sounds/wrong.mp3";
// tuilities
import { delay } from "../utils";


const maxQuestions = 15;
export default function Trivia({
  setStop,
  questions,
  questionNumber,
  setQuestionNumber,
  setTimeOut,
}) {
  // states
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("answer");
  const [isWrong, setIsWrong] = useState(false);

  // sounds audio
  const [correctAnswer] = useSound(correct);
  const [letsPlay] = useSound(play);
  const [waitAnswer, { stop }] = useSound(wait);
  const [wrongAnswer] = useSound(wrong);

  useEffect(() => {
    letsPlay();
  }, [letsPlay]);

  useEffect(() => {
    setQuestion(questions[questionNumber - 1]);
    if (questionNumber === maxQuestions + 1) return setTimeOut(true);
  }, [questions, questionNumber, setTimeOut]);

  const handleClick = (a) => {
    setStop(true);
    setSelectedAnswer(a);
    setClassName("answer active");

    // check to applay the waiting sound for the last 3 questions
    if (questionNumber >= questions.length - 3) {
      waitAnswer(); // wait sound
      delay(8000, () => {
        stop(); // stop timer
        checkAnswer(a);
      });
    } else {
      checkAnswer(a);
    }
  };

  function checkAnswer(a) {
    delay(1000, () => {
      setClassName(a.correct ? "answer correct" : "answer wrong");
    });
    delay(3000, () => {
      if (a.correct) {
        correctAnswer(); // correct sound
        delay(3000, () => {
          setQuestionNumber((prev) => prev + 1);
          setSelectedAnswer(null);
          if (questionNumber >= maxQuestions) {
            delay(1000, () => {
              setTimeOut(true); // finish the quiz
            });
          }
        });
      } else {
        wrongAnswer();  // wrong sound
        setIsWrong(true); // show the the correct answer if the answer is wrong
        delay(3000, () => {
          setTimeOut(true); // eixt from the quiz
        });
      }
    });
  }
  return (
    <div className="trivia">
      <div className="question">{question?.question}</div>
      <div className="answers">
        {question?.answers.map((a) => (
          <div
            key={a.text}
            className={`${selectedAnswer === a ? className : "answer"} ${
              isWrong ? a.correct && "correct" : ""
            }`}
            onClick={() => !selectedAnswer && handleClick(a)}
          >
            {a.text}
          </div>
        ))}
      </div>
    </div>
  );
}
