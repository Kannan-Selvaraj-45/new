import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import QuizHeader from "./QuizHeader";
import Loading from "./Loading"; // Assuming Loading component is in a separate file

const Quiz = () => {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/questions");
        if (!response.ok) {
          throw new Error("Failed to fetch questions");
        }
        const data = await response.json();
        const shuffledQuestions = shuffleQuestions(data);
        setQuestions(shuffledQuestions);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching quiz data:", error);
        setLoading(false);
      }
    };

    fetchQuestions();

    const intervalId = setInterval(() => {
      setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : prevTimer));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleAnswerSelect = (questionId, selectedOption) => {
    const updatedAnswers = { ...answers, [questionId]: selectedOption };
    setAnswers(updatedAnswers);
  };

  const handleSubmit = () => {
    const quizScore = calculateScore(answers);
    setScore(quizScore);
    setShowResult(true);
  };

  const calculateScore = (userAnswers) => {
    let score = 0;
    questions.forEach((question) => {
      const correctAnswer = question.answer;
      const userAnswer = userAnswers[question.id];
      if (userAnswer === correctAnswer) {
        score++;
      }
    });
    return score;
  };

  const restartQuiz = () => {
    setAnswers({});
    setScore(0);
    setShowResult(false);
    setTimer(60);
  };

  const shuffleQuestions = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <QuizHeader timer={timer} />
      <section>
        <div className="md:w-9/12 w-[90%] flex md:flex-row flex-col mx-auto">
          <div className="md:w-[70%] w-full">
            {questions.slice(0, 6).map((question, index) => (
              <div
                key={question.id}
                className="m-3 py-3 px-4 shadow-sm border border-gray-200 rounded"
              >
                <div className="flex items-center rounded text-base p-2 cursor-pointer">
                  <span className="h-8 w-8 bg-[#FCC822] rounded-full flex justify-center items-center text-green-800 mr-3 text-sm font-bold">
                    {index + 1}
                  </span>
                  <p className="text-lg font-medium">{question.question}</p>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-5">
                  {question.options.map((option, optionIndex) => (
                    <div
                      className={`border border-gray-200 rounded text-sm p-2 cursor-pointer ${
                        answers[question.id] === option ? "bg-gray-300" : ""
                      }`}
                      key={option}
                      onClick={() => handleAnswerSelect(question.id, option)}
                    >
                      <p className="text-sm font-medium">Option {optionIndex + 1}</p>
                      <p>{option}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <button
              onClick={handleSubmit}
              className="bg-[#FCC822] px-6 py-2 text-white rounded text-base font-medium mt-4"
            >
              Submit Quiz
            </button>
          </div>

          <div className="md:w-[30%] w-full p-4">
            {showResult && (
              <div>
                <h3 className="text-2xl font-medium">Your Score: </h3>
                <div className="h-[220px] w-[220px] mx-auto mt-8 flex flex-col justify-center items-center border-2 rounded-tr-[50%] rounded-bl-[50%]">
                  <h3 className={`text-xl ${score >= 30 ? "text-green-800" : "text-red-500"}`}>
                    {score * 10}
                    <span className="text-slate-800">/60</span>
                  </h3>
                  <p className="text-sm flex justify-center items-center gap-2">
                    Total Time:{" "}
                    <span className="text-lg text-orange-500">
                      {timer}
                      <span className="text-xs">sec</span>
                    </span>
                  </p>
                </div>
                <button
                  onClick={restartQuiz}
                  className="bg-[#FCC822] text-white w-full py-2 rounded mt-8 text-base font-medium"
                >
                  Restart
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quiz;
