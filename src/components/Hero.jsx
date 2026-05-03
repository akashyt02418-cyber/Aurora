import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <motion.img 
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.7 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          src="/hero.png" 
          alt="Hero" 
        />
        <div className="hero-overlay"></div>
      </div>

      <div className="container hero-content">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="hero-tagline">Est. 2026 — Luxury Goods</span>
          <h1 className="hero-title">
            ELEGANCE <br /> REFINED<span style={{ color: 'var(--accent-primary)' }}>.</span>
          </h1>
          <p className="hero-description">
            Discover a curated collection of minimalist design objects that redefine modern living spaces.
          </p>
          <div className="flex justify-center gap-8">
            <button className="luxury-button">Explore Collection</button>
            <button style={{ border: '1px solid rgba(255,255,255,0.2)', padding: '1rem 2rem', fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Our Story</button>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="hero-scroll-indicator"
      >
        <span className="scroll-text">Scroll</span>
        <div className="scroll-line"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
