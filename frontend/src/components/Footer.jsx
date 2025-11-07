import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h2 className="footer-logo">AgriSmart</h2>
        <div className="footer-tagline">
        <p>Empowering farmers through smart pricing and sustainable markets.</p>
        <p>Built with ❤️ by the AgriSmart Team.</p>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} AgriSmart. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
