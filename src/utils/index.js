export const delay = (duration, callback) => {
  setTimeout(() => {
    callback();
  }, duration);
};

export const shuffleAnswers = (questions) => {
  return questions.map((question) => {
    const shuffledAnswers = question.answers.slice().sort(() => Math.random() - 0.5);
    return {
      ...question,
      answers: shuffledAnswers,
    };
  });
};
