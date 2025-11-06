import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, total, quiz, selectedAnswers } = location.state || {};

  if (!quiz || !selectedAnswers) {
    return (
      <div className="dashboard-container">
        <h2>No quiz data found</h2>
        <button className="improve-btn" onClick={() => navigate("/")}>
          Go Back
        </button>
      </div>
    );
  }

  const handleImproveClick = () => {
    navigate("/ChatBot", {
      state: {
        score,
        total,
        quiz,
        selectedAnswers
      }
    });
  };

  return (
    <div className="dashboard-container">
      <h2>Quiz Results</h2>
      <div className="score">Your Score: {score} / {total}</div>

      <div className="answer-breakdown">
        {quiz.map((q, index) => (
          <div key={index} className="question-block">
            <h4>{q.question}</h4>
            <div className="correct-answer">
              Correct Answer: {q.correctAnswer}
            </div>
            <div
              className={`user-answer ${
                selectedAnswers[index] === q.correctAnswer ? "correct" : "incorrect"
              }`}
            >
              Your Answer: {selectedAnswers[index] || "Not Answered"}
            </div>
          </div>
        ))}
      </div>

      <button onClick={handleImproveClick} className="improve-btn">
        Ask Chatbot for Suggestions
      </button>
    </div>
  );
}

export default Dashboard;
