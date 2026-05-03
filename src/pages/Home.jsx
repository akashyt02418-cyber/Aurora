import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import { motion } from 'framer-motion';
import './Home.css';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/products/featured');
        setProducts(res.data);
      } catch (err) {
        console.error("Error fetching products", err);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <Hero />
      
      <section className="home-section">
        <div className="container">
          <div className="section-header">
            <div>
              <span className="section-tagline">Selected Works</span>
              <h2 className="section-title">Featured <br /> Collection</h2>
            </div>
            <motion.div 
              whileHover={{ x: 10 }}
              className="view-all-link"
            >
              View All Products
            </motion.div>
          </div>

          <div className="product-grid">
            {products.map((product, index) => (
              <motion.div
                key={product._id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section-white">
        <div className="container">
          <div className="narrative-grid">
            <div className="relative">
              <motion.div 
                initial={{ scale: 1.2, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                className="narrative-image"
              >
                <img 
                  src="https://images.unsplash.com/photo-1513519245088-0e12902e35ca?q=80&w=1000" 
                  alt="Craftsmanship" 
                />
              </motion.div>
              <div className="narrative-accent"></div>
            </div>
            <div className="narrative-content">
              <h2>The Art of <br /> Minimalist <br /> Living.</h2>
              <p>
                We believe that every object in your home should tell a story. Our products are carefully sourced from artisans who prioritize quality, sustainability, and timeless aesthetics.
              </p>
              <button className="luxury-button" style={{ background: 'black', color: 'white' }}>
                Discover Our Story
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
