import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState("student");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      // post-signup: optionally set role metadata elsewhere; redirect home
      navigate("/");
    } catch (err) {
      setError("Failed to create an account. " + err.message);
    }

    setLoading(false);
  }

  return (
    <div className="signup-page">
      <div className="signup-container">
        <div className="signup-visual">
          <div className="visual-inner">
            <h1>Join PLC</h1>
            <p className="lead">Create your account to access quizzes, chatbot help and your dashboard.</p>
            <div className="illustration" aria-hidden>
              <svg width="220" height="160" viewBox="0 0 220 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0" y="0" width="220" height="160" rx="16" fill="url(#g)" />
                <g transform="translate(20,20)">
                  <circle cx="40" cy="40" r="22" fill="#fff" opacity="0.25" />
                  <rect x="80" y="20" width="80" height="60" rx="8" fill="#fff" opacity="0.25" />
                </g>
                <defs>
                  <linearGradient id="g" x1="0" x2="1">
                    <stop offset="0" stopColor="#ff7eb3" />
                    <stop offset="1" stopColor="#65d6ff" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <ul className="features">
              <li>Secure accounts</li>
              <li>Progress tracking</li>
              <li>Fast onboarding</li>
            </ul>
          </div>
        </div>

        <div className="signup-card">
          <div className="card-inner">
            <div className="role-toggle">
              <button
                className={`role-btn ${role === "student" ? "active" : ""}`}
                onClick={() => setRole("student")}
                type="button"
              >
                Student
              </button>
              <button
                className={`role-btn ${role === "user" ? "active" : ""}`}
                onClick={() => setRole("user")}
                type="button"
              >
                User
              </button>
            </div>

            <h2 className="card-title">Create account ({role === "student" ? "Student" : "User"})</h2>
            {error && <div className="alert alert-danger">{error}</div>}

            <form onSubmit={handleSubmit} className="signup-form">
              <div className="form-group">
                <label>Full name</label>
                <input type="text" placeholder="Your full name" />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input type="email" ref={emailRef} placeholder="you@example.com" required />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input type="password" ref={passwordRef} placeholder="Create password" required />
              </div>

              <div className="form-group">
                <label>Confirm Password</label>
                <input type="password" ref={passwordConfirmRef} placeholder="Confirm password" required />
              </div>

              <button className="btn primary" disabled={loading} type="submit">
                Create account
              </button>

              <div className="divider">or</div>

              <div className="socials">
                <button className="btn social google" type="button">Continue with Google</button>
                <button className="btn social" type="button">Use email</button>
              </div>
            </form>

            <div className="signup-link">
              Already registered? <Link to="/login">Log in</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
