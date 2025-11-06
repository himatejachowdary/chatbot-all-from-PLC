import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import "animate.css";

function Home() {
  return (
    <>
      <div className="container mt-5">

        {/* Hero Section */}
        <section className="text-center py-5 animate__animated animate__fadeIn">
          <h1 className="display-4 fw-bold">
            Welcome to Your AI-Powered Learning Companion!
          </h1>
          <p className="lead text-secondary animate__animated animate__fadeInUp animate__delay-1s">
            Smarter, faster, and better learning with real-time AI assistance.
          </p>
          <a href="#chatbot-section" className="btn btn-primary btn-lg animate__animated animate__bounceIn animate__delay-2s">
            Try Chatbot Now
          </a>
        </section>

        {/* About Section */}
        <section className="text-center mt-5 animate__animated animate__fadeInUp">
          <h2 className="fw-bold">What is PLC?</h2>
          <p className="text-secondary mt-3">
            PLC (Personalized Learning Companion) is your on-the-go AI assistant
            that adapts to your learning style, helps you solve problems, and never stores your data.
          </p>
        </section>

        {/* Updated Features Section */}
        <section className="mt-5">
          <h2 className="text-center fw-bold animate__animated animate__fadeInDown">What's New in PLC?</h2>
          <div className="row text-center mt-4">
            <div className="col-md-4 animate__animated animate__zoomIn">
              <div className="p-3 border rounded bg-light h-100">
                <h4>🤖 AI Chatbot</h4>
                <p>Interactive and real-time assistant that answers your learning queries instantly.</p>
              </div>
            </div>
            <div className="col-md-4 animate__animated animate__zoomIn animate__delay-1s">
              <div className="p-3 border rounded bg-light h-100">
                <h4>🧠 ML-Based Quiz & Feedback</h4>
                <p>Generate topic-based quizzes and get smart insights on where to improve.</p>
              </div>
            </div>
            <div className="col-md-4 animate__animated animate__zoomIn animate__delay-2s">
              <div className="p-3 border rounded bg-light h-100">
                <h4>🔐 Zero Data Storage</h4>
                <p>No logins. No tracking. Just pure learning and complete privacy.</p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="mt-5 text-center">
          <h2 className="fw-bold animate__animated animate__fadeInLeft">How It Works?</h2>
          <div className="row justify-content-center mt-4">
            <div className="col-md-3 animate__animated animate__fadeInUp">
              <div className="p-3 border rounded bg-light">
                <h4>1️⃣ Ask or Select Topic</h4>
                <p>Type your question or choose a quiz topic.</p>
              </div>
            </div>
            <div className="col-md-3 animate__animated animate__fadeInUp animate__delay-1s">
              <div className="p-3 border rounded bg-light">
                <h4>2️⃣ AI Responds or Quiz Appears</h4>
                <p>Get real-time answers or take the AI-generated quiz.</p>
              </div>
            </div>
            <div className="col-md-3 animate__animated animate__fadeInUp animate__delay-2s">
              <div className="p-3 border rounded bg-light">
                <h4>3️⃣ Get Feedback</h4>
                <p>Receive performance-based tips directly from the chatbot.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mt-5 text-center">
          <h2 className="fw-bold animate__animated animate__lightSpeedInRight">What Users Say</h2>
          <div className="row justify-content-center mt-4">
            <div className="col-md-4 animate__animated animate__fadeIn">
              <div className="p-3 border rounded bg-light">
                <p>"This AI chatbot is amazing! It answers all my questions instantly." ⭐⭐⭐⭐⭐</p>
                <h6>- A Happy Learner</h6>
              </div>
            </div>
            <div className="col-md-4 animate__animated animate__fadeIn animate__delay-1s">
              <div className="p-3 border rounded bg-light">
                <p>"Quiz + feedback? Game changer. Perfect for quick revisions!" ⭐⭐⭐⭐⭐</p>
                <h6>- Focused Student</h6>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <div id="chatbot-section" className="mt-5 text-center">
          <h2 className="fw-bold animate__animated animate__pulse">Try the Chatbot Now!</h2>
          <p className="text-muted">Click below and start exploring smarter learning.</p>
          <Link to="/chatbot" className="btn btn-success btn-lg animate__animated animate__heartBeat">
            Go to Chatbot
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;