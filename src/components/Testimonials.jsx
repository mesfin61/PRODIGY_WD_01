import React, { useState } from 'react';
import '../styles/testimonials.css';

function Testimonials () {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Michael Johnson',
      role: 'Business Owner',
      rating: 5,
      content: 'The team at AutoElite made my car buying experience exceptional. Their attention to detail and transparent pricing helped me get exactly what I wanted without any hassle.',
      photo: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      id: 2,
      name: 'Sarah Williams',
      role: 'Marketing Director',
      rating: 5,
      content: 'I was nervous about buying a pre-owned vehicle, but their certified inspection process gave me complete confidence. The car has been perfect for my family!',
      photo: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      id: 3,
      name: 'David Chen',
      role: 'Software Engineer',
      rating: 4,
      content: 'Great selection of luxury vehicles. The financing options were clearly explained and I got a better rate than my bank offered. Will definitely recommend to friends.',
      photo: 'https://randomuser.me/api/portraits/men/67.jpg'
    },
    {
      id: 4,
      name: 'Emily Rodriguez',
      role: 'Physician',
      rating: 5,
      content: 'The after-sales service is outstanding. They remembered all my preferences and the maintenance reminders are so helpful for my busy schedule.',
      photo: 'https://randomuser.me/api/portraits/women/28.jpg'
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToTestimonial = (index) => {
    setActiveIndex(index);
  };

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="testimonials-header">
        <h2 className="section-subtitle">Client Stories</h2>
        <h3 className="section-title">What Our Customers Say</h3>
        <p className="section-description">
          Don't just take our word for it - hear from our satisfied clients
        </p>
      </div>

      <div className="testimonials-container">
        <div className="testimonials-slider">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className={`testimonial-card ${index === activeIndex ? 'active' : ''}`}
            >
              <div className="testimonial-content">
                <div className="rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="star">★</span>
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.content}"</p>
                <div className="testimonial-author">
                  <img 
                    src={testimonial.photo} 
                    alt={testimonial.name} 
                    className="author-photo"
                  />
                  <div className="author-info">
                    <h4 className="author-name">{testimonial.name}</h4>
                    <p className="author-role">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="testimonial-controls">
          <button 
            className="control-button prev"
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
          >
            &lt;
          </button>
          
          <div className="indicators">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === activeIndex ? 'active' : ''}`}
                onClick={() => goToTestimonial(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <button 
            className="control-button next"
            onClick={nextTestimonial}
            aria-label="Next testimonial"
          >
            &gt;
          </button>
        </div>
      </div>

      <div className="testimonials-cta">
        <p>Ready to share your own experience?</p>
        <a href="#contact" className="cta-button">
          Leave a Review
        </a>
      </div>
    </section>
  );
};

export default Testimonials;