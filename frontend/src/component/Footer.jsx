import React from "react";
import "./cssfile/Footer.css";

function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="footer-container">
          <div className="logo-section">
            <a href="home" aria-label="Home">
              CYB-DEC
            </a>
          </div>
          <nav className="footer-nav">
            <ul>
              <li>
                <a href="about" aria-label="About Us">
                  About
                </a>
              </li>
              <li>
                <a href="contact" aria-label="Contact Us">
                  Contact
                </a>
              </li>
              <li>
                <a href="privacy" aria-label="Privacy Policy">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="terms" aria-label="Terms of Service">
                  Terms of Service
                </a>
              </li>
            </ul>
          </nav>
          
        </div>
      </footer>
        <div>@Copyright is reserved</div>
    </div>
  );
}

export default Footer;
