import React, { useState } from 'react';
import '../styles/contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-header">
        <h2 className="section-subtitle">Get In Touch</h2>
        <h3 className="section-title">Contact Us</h3>
        <p className="section-description">
          Have questions or ready to schedule a visit? Reach out to our team today.
        </p>
      </div>

      <div className="contact-container">
        <div className="contact-form-container">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Full Name*</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email*</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject*</label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              >
                <option value="">Select a subject</option>
                <option value="test-drive">Schedule a Test Drive</option>
                <option value="inquiry">Vehicle Inquiry</option>
                <option value="service">Service Appointment</option>
                <option value="finance">Financing Questions</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message*</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-button">
              Send Message
            </button>

            {submitted && (
              <div className="success-message">
                Thank you! Your message has been sent. We'll contact you soon.
              </div>
            )}
          </form>
        </div>

        <div className="contact-info-container">
          <div className="contact-info">
            <h4>Contact Information</h4>
            <p>We're here to help with any questions about our vehicles, services, or dealership.</p>

            <div className="contact-method">
              <div className="contact-icon">📍</div>
              <div className="contact-details">
                <h5>Visit Us</h5>
                <p>123 Auto Elite Boulevard<br />Miami, FL 33101</p>
                <p className="directions-note">
                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                    Get Directions
                  </a>
                </p>
              </div>
            </div>

            <div className="contact-method">
              <div className="contact-icon">📞</div>
              <div className="contact-details">
                <h5>Call Us</h5>
                <p>
                  Sales: <a href="tel:+18005551234">(800) 555-1234</a><br />
                  Service: <a href="tel:+18005554321">(800) 555-4321</a>
                </p>
              </div>
            </div>

            <div className="contact-method">
              <div className="contact-icon">✉️</div>
              <div className="contact-details">
                <h5>Email Us</h5>
                <p>
                  Sales: <a href="mailto:sales@autoelite.com">sales@autoelite.com</a><br />
                  Service: <a href="mailto:service@autoelite.com">service@autoelite.com</a>
                </p>
              </div>
            </div>

            <div className="contact-method">
              <div className="contact-icon">🕒</div>
              <div className="contact-details">
                <h5>Business Hours</h5>
                <p>
                  Monday - Friday: 9:00 AM - 8:00 PM<br />
                  Saturday: 9:00 AM - 6:00 PM<br />
                  Sunday: 11:00 AM - 5:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;