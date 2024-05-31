import { useEffect, useState } from "react";
import useSound from "use-sound";
import play from "../sounds/play.mp3";
import correct from "../sounds/correct.mp3";
import wrong from "../sounds/wrong.mp3";
import {delay} from '../utils'
const maxQuestions = 15;
export default function Trivia({
  setStop,
  questions,
  questionNumber,
  setQuestionNumber,
  setTimeOut,
}) {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("answer");
  const [letsPlay] = useSound(play);
  const [correctAnswer] = useSound(correct);
  const [wrongAnswer] = useSound(wrong);
  const [isWrong,setIsWrong] = useState(false);

  useEffect(() => {
    letsPlay();
  }, [letsPlay]);

  useEffect(() => {
    
    setQuestion(questions[questionNumber - 1]);
    if(questionNumber === maxQuestions + 1) return setTimeOut(true);
  }, [questions, questionNumber, setTimeOut]);


  const handleClick = (a) => {
    setStop(true)
    setSelectedAnswer(a);
    setClassName("answer active");
    delay(1000, () => {
      setClassName(a.correct ? "answer correct" : "answer wrong");
    });
    delay(3000, () => {
      if (a.correct) {
        correctAnswer();
        delay(3000, () => {
          setQuestionNumber((prev) => prev + 1);
          setSelectedAnswer(null);
          if (questionNumber >= maxQuestions) {
            delay(1000, () => {
              setTimeOut(true);
            });
          } 
        });
      } else {
        wrongAnswer();
        setIsWrong(true);
        delay(3000, () => {
          setTimeOut(true);
        });
      }
    });
  };
  return (
    <div className="trivia">
      <div className="question">{question?.question}</div>
      <div className="answers">
        {question?.answers.map((a) => (
          <div
            key={a.text}
            className={`${selectedAnswer === a ? className : "answer"} ${isWrong ? a.correct && "correct": ""}`}
            onClick={() => !selectedAnswer && handleClick(a)}
          >
            {a.text}
          </div>
        ))}
      </div>
    </div>
  );
}
