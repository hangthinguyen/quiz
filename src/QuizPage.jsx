import QuizContext from "./contexts/QuizContext";
import { useCallback, useContext, useEffect, useState } from "react";

const QuizPage = () => {
  const { quiz } = useContext(QuizContext);

  const [question, setQuestion] = useState({});

  const [index, setIndex] = useState(0);

  const handleNextQuestionButton = useCallback(() => {
    setIndex(index + 1);
  }, [index]);

  const handleQuestions = useCallback(() => {
    setQuestion(quiz[index]);
  }, [index, quiz]);

  useEffect(() => {
    handleQuestions();
  }, [handleQuestions]);

  console.log(question);

  return (
    <div className="h-screen flex justify-center items-center bg-slate-100">
      <section className="flex flex-col gap-8 w-10/12 bg-white max-w-screen-lg rounded p-12 items-center">
        <div className="text-right w-full tracking-widest text-green text-green-500">
          Correct Answers: 0/0
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-4xl text-center font-bold tracking-wider mb-8">
            {question.question}
          </h1>
          <div className="flex flex-col gap-2">
            <div>{question.incorrect_answers}</div>
            <div>{question.correct_answer}</div>
          </div>
        </div>
        <div className="w-full flex justify-end">
          <button
            className="font-bold bg-amber-400 w-4/12 rounded px-2 py-1 capitalize"
            onClick={handleNextQuestionButton}
          >
            next question
          </button>
        </div>
      </section>
    </div>
  );
};

export default QuizPage;
