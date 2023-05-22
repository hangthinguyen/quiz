import { useCallback, useState, useContext } from "react";
import { getQuestions } from "./api/fetchAPI";
import { Link, useNavigate } from "react-router-dom";
import QuizSettingsFormFields from "./QuizSettingsFormFields";
import QuizContext from "./contexts/QuizContext";

const table = {
  sports: 21,
  history: 23,
  politics: 24,
};

function QuizSettingsForm() {
  const [quizSetting, setQuizSetting] = useState({
    amount: "10",
    category: "sports",
    difficulty: "easy",
  });

  const { quiz, setQuiz } = useContext(QuizContext);

  const [isCalled, setIsCalled] = useState(false);

  const handleOnChange = useCallback(
    (e) => {
      const name = e.target.name;
      const value = e.target.value;
      setQuizSetting({
        ...quizSetting,
        [name]: `${value}`,
      });
    },
    [quizSetting]
  );

  const navigate = useNavigate();

  const handleOnSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      const url = `amount=${quizSetting.amount}&difficulty=${
        quizSetting.difficulty
      }&category=${table[quizSetting.category]}&type=multiple`;

      const response = await getQuestions(url);
      setQuiz(response.data.results);
      setIsCalled(true);

      navigate("/quiz");
    },
    [
      navigate,
      quizSetting.amount,
      quizSetting.category,
      quizSetting.difficulty,
      setQuiz,
    ]
  );

  return (
    <div className="h-screen flex justify-center items-center bg-slate-100">
      <header className="bg-white w-6/12 max-w-lg box-border rounded p-12 flex flex-col gap-8 items-center">
        <h1 className="font-bold text-4xl">Set Up Quiz</h1>

        <QuizSettingsFormFields onChange={handleOnChange} />

        {quiz.length === 0 && isCalled ? (
          <p>Can't Generate Questions, Please Try Different Options</p>
        ) : null}

        <Link to="/quiz">
          <button
            className="bg-amber-500 rounded text-center cursor-pointer py-1 w-fit px-6 py-1"
            onClick={handleOnSubmit}
          >
            Start
          </button>
        </Link>
      </header>
    </div>
  );
}

export default QuizSettingsForm;
