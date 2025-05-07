import React from 'react';
import '../styles/about.css';

function About () {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-subtitle">About Our Dealership</h2>
            <h3 className="section-title">Premium Automotive Excellence Since 1995</h3>
            <p className="about-description">
              For over 25 years, we've been providing exceptional vehicles and unparalleled 
              customer service to car enthusiasts across the region. Our commitment to 
              quality and transparency has made us the most trusted dealership in the area.
            </p>
            
            <div className="about-features">
              <div className="feature-item">
                <div className="feature-icon">✓</div>
                <div className="feature-text">Certified pre-owned vehicles</div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">✓</div>
                <div className="feature-text">Transparent pricing with no hidden fees</div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">✓</div>
                <div className="feature-text">Award-winning customer service</div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">✓</div>
                <div className="feature-text">Comprehensive warranty options</div>
              </div>
            </div>
            
            <button className="about-button">
              Learn More About Us
            </button>
          </div>
          
          <div className="about-image">
            <img 
              src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Car dealership showroom" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;