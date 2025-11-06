import React, { useState } from "react";
import axios from "axios";
import "./Quiz.css";
import { useNavigate } from "react-router-dom";

function Quiz() {
  const [topic, setTopic] = useState("");
  const [quiz, setQuiz] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const navigate = useNavigate();

  async function generateQuiz() {
    if (!topic.trim()) {
      alert("Please enter a topic.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyBZqFJf037THbm4gJMXSU01W_JIEEbY-iE",
        {
          contents: [
            {
              parts: [
                {
                  text: `Generate a 10-question multiple choice quiz on the topic of ${topic}.
Each question should have:
- a question string
- four options
- one correct answer

Return the output as a valid JSON object in the following format:
{
  "questions": [
    {
      "question": "What is Artificial Intelligence?",
      "options": [
        "A. A form of computer virus",
        "B. Human-like behavior from machines",
        "C. Natural intelligence of humans",
        "D. Manual programming of devices"
      ],
      "correctAnswer": "B. Human-like behavior from machines"
    }
  ]
}
Only return the JSON object. No explanation. No code blocks.
`
                }
              ]
            }
          ]
        }
      );

      let quizText = response.data?.candidates?.[0]?.content?.parts?.[0]?.text;
      quizText = quizText.replace(/```json|```/g, "").trim();
      const parsedData = JSON.parse(quizText);

      if (!parsedData.questions || !Array.isArray(parsedData.questions)) {
        throw new Error("Invalid quiz format.");
      }

      setQuiz(parsedData.questions);
      setCurrentQuestionIndex(0);
      setSelectedAnswers({});
      setQuizCompleted(false);
    } catch (error) {
      console.error("Quiz generation failed:", error);
      alert("Failed to generate quiz. Try again later.");
    }

    setLoading(false);
  }

  function handleOptionSelect(option) {
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestionIndex]: option
    }));
  }

  function handleNextQuestion() {
    if (currentQuestionIndex < quiz.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setQuizCompleted(true);
    }
  }

  function handleSubmit() {
    let score = 0;
    quiz.forEach((q, index) => {
      if (selectedAnswers[index] === q.correctAnswer) {
        score++;
      }
    });
  
    navigate("/dashboard", {
      state: {
        score,
        total: quiz.length,
        quiz,
        selectedAnswers
      }
    });
  }
  

  return (
    <div className="quiz-container" style={{height: '75vh'}}>
      {!quiz.length && (
        <div className="quiz-input">
          <h2>Generate Your Quiz</h2>
          <input
            type="text"
            placeholder="Enter a topic..."
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          />
          <button onClick={generateQuiz} disabled={loading}>
            {loading ? "Generating..." : "Generate Quiz"}
          </button>
        </div>
      )}

      {quiz.length > 0 && !quizCompleted && (
        <div className="quiz-content">
          <div className="quiz-chat">
            <div className="question-block">
              <h3>{quiz[currentQuestionIndex].question}</h3>
              <div className="options-scroll">
                {quiz[currentQuestionIndex].options.map((option, i) => (
                  <label key={i} className="quiz-option">
                    <input
                      type="radio"
                      name={`question-${currentQuestionIndex}`}
                      value={option}
                      checked={selectedAnswers[currentQuestionIndex] === option}
                      onChange={() => handleOptionSelect(option)}
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="quiz-footer">
            <button onClick={handleNextQuestion}>
              {currentQuestionIndex < quiz.length - 1 ? "Next" : "Submit"}
            </button>
          </div>
        </div>
      )}

      {quizCompleted && (
        <div className="quiz-complete">
          <h3>Quiz Completed!</h3>
          <button onClick={handleSubmit}>Submit Quiz</button>
        </div>
      )}
    </div>
  );
}

export default Quiz;