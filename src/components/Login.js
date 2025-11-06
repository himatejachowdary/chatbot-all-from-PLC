import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState("student");
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate(from, { replace: true });
    } catch (err) {
      setError("Failed to sign in. " + err.message);
    }
    setLoading(false);
  }

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-visual">
          <div className="visual-inner">
            <h1>Welcome to PLC</h1>
            <p className="lead">Interactive learning & assessments for students and users.</p>
            <div className="illustration" aria-hidden>
              {/* simple friendly SVG illustration */}
              <svg width="220" height="160" viewBox="0 0 220 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0" y="0" width="220" height="160" rx="16" fill="url(#g)" />
                <g transform="translate(20,20)">
                  <circle cx="40" cy="40" r="22" fill="#fff" opacity="0.25" />
                  <rect x="80" y="20" width="80" height="60" rx="8" fill="#fff" opacity="0.25" />
                </g>
                <defs>
                  <linearGradient id="g" x1="0" x2="1">
                    <stop offset="0" stopColor="#6a11cb" />
                    <stop offset="1" stopColor="#2575fc" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <ul className="features">
              <li>Fast quizzes</li>
              <li>Interactive ChatBot</li>
              <li>Personalized dashboard</li>
            </ul>
          </div>
        </div>

        <div className="login-card">
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

            <h2 className="card-title">Sign in as {role === "student" ? "Student" : "User"}</h2>
            {error && <div className="alert alert-danger">{error}</div>}

            <form onSubmit={handleSubmit} className="login-form">
              <div className="form-group">
                <label>Email</label>
                <input type="email" ref={emailRef} placeholder="you@example.com" required />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input type="password" ref={passwordRef} placeholder="Enter password" required />
              </div>

              <button className="btn primary" disabled={loading} type="submit">
                Log In
              </button>

              <div className="divider">or</div>

              <div className="socials">
                <button className="btn social google" type="button">Sign in with Google</button>
                <button className="btn social" type="button">Sign in with Email</button>
              </div>
            </form>

            <div className="signup-link">
              New here? <Link to="/signup">Create an account</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
