import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router";
import StartForm from "./pages/StartForm";
import Questions from "./pages/Questions";
import QuizResults from "./pages/QuizResult";
import Header from "./components/Header";
import { context } from "./context/context";

import "./App.css";

function App() {
  const [score, setScore] = useState(0);
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [type, setType] = useState("");
  const [amount, setAmount] = useState(10);

  return (
    <Router color="dark">
      <Header />
      <context.Provider
        value={{
          score,
          setScore,
          category,
          setCategory,
          difficulty,
          setDifficulty,
          type,
          setType,
          amount,
          setAmount,
        }}
      >
        <Routes>
          <Route path="/" element={<StartForm />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/score" element={<QuizResults />} />
        </Routes>
      </context.Provider>
    </Router>
  );
}

export default App;
