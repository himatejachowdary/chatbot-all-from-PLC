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
            <a className="nav-link active" aria-current="page" onClick={() => handleNav("/")}>Home</a>
            <a className="nav-link" onClick={() => handleNav("/Chatbot", true)}>ChatBot</a>
            <a className="nav-link" onClick={() => handleNav("/Quiz", true)}>Quiz</a>
            <a className="nav-link" onClick={() => handleNav("/Contact", true)}>Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Topbar;
