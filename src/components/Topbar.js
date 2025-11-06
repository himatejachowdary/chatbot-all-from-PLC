import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function Topbar() {
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  function handleNav(path, requiresAuth = false) {
    if (requiresAuth && !currentUser) {
      // redirect to login and preserve where the user wanted to go
      navigate("/login", { state: { from: { pathname: path } } });
      return;
    }
    navigate(path);
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          PLC
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            {/* Use Link for regular navigation (provides href) to satisfy a11y */}
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>

            {/* For routes that require auth, use a button styled like a link and include role="link" */}
            <button
              type="button"
              className="nav-link btn-as-link"
              onClick={() => handleNav("/Chatbot", true)}
              aria-label="ChatBot"
              role="link"
            >
              ChatBot
            </button>

            <button
              type="button"
              className="nav-link btn-as-link"
              onClick={() => handleNav("/Quiz", true)}
              aria-label="Quiz"
              role="link"
            >
              Quiz
            </button>

            <button
              type="button"
              className="nav-link btn-as-link"
              onClick={() => handleNav("/Contact", true)}
              aria-label="Contact"
              role="link"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Topbar;
