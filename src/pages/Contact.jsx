import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="container">
        <header className="contact-header">
          <span className="section-tagline">Get In Touch</span>
          <h1 className="contact-title">Let's Connect<span style={{ color: 'var(--accent-primary)' }}>.</span></h1>
        </header>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-method">
              <h3>General Inquiries</h3>
              <p>hello@aurora.studio</p>
            </div>
            <div className="contact-method">
              <h3>Support</h3>
              <p>support@aurora.studio</p>
            </div>
            <div className="contact-method">
              <h3>Studio</h3>
              <p>123 Minimalist Way,<br />Design District,<br />New York, NY 10001</p>
            </div>
            <div className="social-links-contact">
              <a href="#">Instagram</a>
              <a href="#">Pinterest</a>
              <a href="#">LinkedIn</a>
            </div>
          </div>

          <form className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label>Name</label>
                <input type="text" placeholder="John Doe" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="john@example.com" />
              </div>
            </div>
            <div className="form-group">
              <label>Subject</label>
              <select>
                <option>General Inquiry</option>
                <option>Product Support</option>
                <option>Partnership</option>
              </select>
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea placeholder="Tell us more about your inquiry..." rows="6"></textarea>
            </div>
            <button type="submit" className="luxury-button" style={{ width: '100%' }}>Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
