import { Link } from "react-router-dom";
import QuizContext from "./contexts/QuizContext";
import { useContext } from "react";

const QuizPage = () => {
  const { quiz } = useContext(QuizContext);

  console.log(quiz);
  return (
    <div className="h-screen flex justify-center items-center bg-slate-100">
      <Link to="/">Home</Link>
    </div>
  );
};

export default QuizPage;
