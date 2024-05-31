import { useEffect, useState } from "react";

export default function Timer({ setTimeOut, questionNumber,stop ,setStop}) {
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    if (timer === 0) return setTimeOut(true);
    const interval = setInterval(() => {
      if(!stop)
        setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer, setTimeOut , stop]);

  useEffect(() => {
    setTimer(30);
    setStop(false)
  }, [questionNumber,setStop]);
  return timer;
}
