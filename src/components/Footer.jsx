import React from 'react';
import '../styles/footer.css';

function Footer () {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-column about-column">
            <div className="footer-logo">
              <span>Auto</span>
              <span className="logo-highlight">Elite</span>
            </div>
            <p className="footer-description">
              Premium automotive excellence since 1995. We provide exceptional vehicles and unparalleled customer service.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">
                <span className="social-icon">📘</span>
              </a>
              <a href="#" aria-label="Instagram">
                <span className="social-icon">📷</span>
              </a>
              <a href="#" aria-label="Twitter">
                <span className="social-icon">🐦</span>
              </a>
              <a href="#" aria-label="YouTube">
                <span className="social-icon">▶️</span>
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#banner">Home</a></li>
              <li><a href="#featured">Inventory</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-title">Services</h4>
            <ul className="footer-links">
              <li><a href="#services">Vehicle Financing</a></li>
              <li><a href="#services">Certified Pre-Owned</a></li>
              <li><a href="#services">Maintenance</a></li>
              <li><a href="#services">Trade-In</a></li>
              <li><a href="#services">Test Drives</a></li>
              <li><a href="#services">Warranty</a></li>
            </ul>
          </div>

          <div className="footer-column contact-column">
            <h4 className="footer-title">Contact Us</h4>
            <ul className="footer-contact">
              <li className="contact-item">
                <span className="contact-icon">📍</span>
                <span>123 Auto Elite Blvd, Addis Ababa, Ethiopia</span>
              </li>
              <li className="contact-item">
                <span className="contact-icon">📞</span>
                <span><a href="tel:+251912345678">+251 912 345 678</a></span>
              </li>
              <li className="contact-item">
                <span className="contact-icon">✉️</span>
                <span><a href="mailto:info@autoelite.com">info@autoelite.com</a></span>
              </li>
              <li className="contact-item">
                <span className="contact-icon">🕒</span>
                <span>Mon-Fri: 9AM - 8PM | Sat: 9AM - 6PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="copyright">
            &copy; {new Date().getFullYear()} Auto Elite. All Rights Reserved.
          </div>
          <div className="legal-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;