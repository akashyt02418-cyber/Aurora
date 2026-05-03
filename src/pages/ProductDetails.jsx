import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/products/${id}`);
        setProduct(res.data);
      } catch (err) {
        console.error("Error fetching product", err);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) return (
    <div className="h-screen flex items-center justify-center">
      <div style={{ width: '3rem', height: '3rem', border: '2px solid var(--accent-primary)', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );

  return (
    <div className="details-page">
      <div className="container">
        <Link to="/shop" className="back-link">
          ← Back to Collection
        </Link>

        <div className="details-grid">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="details-image"
          >
            <img src={product.image} alt={product.name} />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="details-content"
          >
            <span className="details-category">{product.category}</span>
            <h1 className="details-title">{product.name}</h1>
            <p className="details-price">${product.price}</p>
            <p className="details-description">
              {product.description}
            </p>

            <div className="flex-col gap-8">
              <div className="quantity-selector">
                <span className="quantity-label">Quantity</span>
                <div className="quantity-controls">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                  <span style={{ width: '1rem', textAlign: 'center', fontSize: '0.9rem' }}>{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)}>+</button>
                </div>
              </div>

              <button className="luxury-button" style={{ width: '100%' }}>
                Add to Cart
              </button>
            </div>

            <div className="details-footer">
              <div className="footer-info-item">
                <span>Shipping</span>
                <span>Worldwide Delivery</span>
              </div>
              <div className="footer-info-item">
                <span>Returns</span>
                <span>30-Day Policy</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
