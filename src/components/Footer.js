import React from "react";
import "./Footer.css"; // Optional: for custom styling

function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-5">
      <div className="container">
        <p className="mb-0">&copy; {new Date().getFullYear()} Personalized Learning Companion. All rights reserved.</p>
        <small>Built with ❤️ by Deepak Chetty & Team</small>
      </div>
    </footer>
  );
}

export default Footer;