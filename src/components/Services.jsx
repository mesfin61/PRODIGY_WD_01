import React from 'react';
import '../styles/services.css';

function Services () {
  const services = [
    {
      id: 1,
      title: 'Vehicle Financing',
      description: 'Competitive financing options tailored to your budget with quick approval process.',
      icon: '💰',
      features: ['Low interest rates', 'Flexible terms', 'Fast approval', 'Online application']
    },
    {
      id: 2,
      title: 'Certified Pre-Owned',
      description: 'Rigorous inspection process and extended warranty on select pre-owned vehicles.',
      icon: '🔍',
      features: ['300-point inspection', 'Warranty included', 'Roadside assistance', 'Certified quality']
    },
    {
      id: 3,
      title: 'Maintenance Services',
      description: 'Factory-trained technicians using genuine parts for all your maintenance needs.',
      icon: '🔧',
      features: ['Oil changes', 'Brake service', 'Factory-trained techs', 'Genuine parts']
    },
    {
      id: 4,
      title: 'Vehicle Trade-In',
      description: 'Get top value for your current vehicle when you upgrade to a new model.',
      icon: '🔄',
      features: ['Fair market value', 'Quick evaluation', 'Seamless process', 'Apply to new purchase']
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="services-header">
        <h2 className="section-subtitle">Our Services</h2>
        <h3 className="section-title">Beyond Just Selling Cars</h3>
        <p className="section-description">
          We provide comprehensive automotive solutions to meet all your needs
        </p>
      </div>

      <div className="services-grid">
        {services.map(service => (
          <div key={service.id} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h4 className="service-title">{service.title}</h4>
            <p className="service-description">{service.description}</p>
            <ul className="service-features">
              {service.features.map((feature, index) => (
                <li key={index} className="feature-item">
                  <span className="feature-check">✓</span> {feature}
                </li>
              ))}
            </ul>
            <button className="service-button">
              Learn More
            </button>
          </div>
        ))}
      </div>

      <div className="service-cta">
        <h4>Ready to experience our premium services?</h4>
        <div className="cta-buttons">
          <a href="#contact" className="cta-button primary">
            Contact Our Team
          </a>
          <a href="tel:+18005551234" className="cta-button secondary">
            Call Now: (800) 555-1234
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;