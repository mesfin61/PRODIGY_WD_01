import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import '../styles/header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <a href="/">
            <span className="logo-text">Auto</span>
            <span className="logo-highlight">Elite</span>
          </a>
        </div>

        <button 
          className={`mobile-menu-button ${isMenuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="banner" smooth={true} duration={500} className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</Link>
            </li>
            <li className="nav-item">
              <Link to="featured" smooth={true} duration={500} className="nav-link" onClick={() => setIsMenuOpen(false)}>Inventory</Link>
            </li>
            <li className="nav-item">
              <Link to="services" smooth={true} duration={500} className="nav-link" onClick={() => setIsMenuOpen(false)}>Services</Link>
            </li>
            <li className="nav-item">
              <Link to="about" smooth={true} duration={500} className="nav-link" onClick={() => setIsMenuOpen(false)}>About</Link>
            </li>
            <li className="nav-item">
              <Link to="testimonials" smooth={true} duration={500} className="nav-link" onClick={() => setIsMenuOpen(false)}>Testimonials</Link>
            </li>
          </ul>

          <div className="header-actions">
            <a href="#test-drive" className="cta-button">
              Book a Test Drive
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;