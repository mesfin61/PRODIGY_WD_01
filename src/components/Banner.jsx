import React from 'react';
import '../styles/banner.css';

function Banner () {
  return (
    <div className="banner-container">
      <div className="banner-background">
        <img
          className="banner-image"
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
          alt="Luxury car"
        />
      </div>
      
      <div className="banner-content">
        <div className="banner-text">
          <h1 className="banner-title">
            Experience the Future of Driving
          </h1>
          <p className="banner-description">
            Discover our premium collection of vehicles with cutting-edge technology and unparalleled comfort.
          </p>
          <div className="banner-buttons">
            <a
              href="#models"
              className="banner-button primary"
            >
              View Models
            </a>
            <a
              href="#test-drive"
              className="banner-button secondary"
            >
              Book a Test Drive
            </a>
          </div>
        </div>
      </div>
      
      <div className="banner-stats">
        <div className="stats-container">
          <div className="stat-item">
            <p className="stat-number">250+</p>
            <p className="stat-label">Vehicles in Stock</p>
          </div>
          <div className="stat-item">
            <p className="stat-number">98%</p>
            <p className="stat-label">Customer Satisfaction</p>
          </div>
          <div className="stat-item">
            <p className="stat-number">24/7</p>
            <p className="stat-label">Service Support</p>
          </div>
          <div className="stat-item">
            <p className="stat-number">10+</p>
            <p className="stat-label">Brands Available</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;