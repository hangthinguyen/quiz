import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import QuizSettingsForm from "./QuizSettingsForm";
import QuizPage from "./QuizPage";
import QuizContext from "./contexts/QuizContext";

export default function App() {
  const [quiz, setQuiz] = useState([]);

  return (
    <QuizContext.Provider value={{ quiz, setQuiz }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<QuizSettingsForm />} />
          <Route path="quiz" element={<QuizPage />} />
        </Routes>
      </BrowserRouter>
    </QuizContext.Provider>
  );
}
