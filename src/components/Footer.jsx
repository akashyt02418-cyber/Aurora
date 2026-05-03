import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <h2 className="font-serif tracking-tighter">AURORA<span style={{ color: 'var(--accent-primary)' }}>.</span></h2>
            <p>
              Elevating the everyday through conscious design and exceptional craftsmanship. Join our journey towards a more beautiful world.
            </p>
            <div className="social-links">
              <span>Instagram</span>
              <span>Twitter</span>
              <span>Pinterest</span>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Navigation</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/shop">Shop</Link></li>
              <li><Link to="/about">Our Story</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Newsletter</h4>
            <p className="newsletter-text">Stay updated with our latest releases and studio news.</p>
            <div className="newsletter-input-group">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
              />
              <button className="newsletter-btn">Join</button>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© 2026 AURORA DESIGN STUDIO. ALL RIGHTS RESERVED.</p>
          <div className="footer-legal">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

