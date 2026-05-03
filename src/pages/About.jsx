import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="container">
        <header className="about-header">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-tagline"
          >
            Our Philosophy
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="about-title"
          >
            Crafting the <br /> Future of Living<span style={{ color: 'var(--accent-primary)' }}>.</span>
          </motion.h1>
        </header>

        <div className="about-grid">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="about-image"
          >
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000" alt="Our Studio" />
          </motion.div>
          <div className="about-content">
            <h2>Minimalism is not about having less. It's about making room for more of what matters.</h2>
            <p>
              Founded in 2026, AURORA was born out of a desire to simplify the modern living space. We believe that the objects we surround ourselves with should be both functional and beautiful, serving a purpose while elevating our daily experiences.
            </p>
            <p>
              Every piece in our collection is carefully selected for its craftsmanship, material quality, and timeless design. We partner with artisans who share our commitment to sustainability and excellence.
            </p>
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-number">2026</span>
                <span className="stat-label">Founded</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Artisans</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">12</span>
                <span className="stat-label">Countries</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
