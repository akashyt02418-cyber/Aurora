import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="product-card-wrapper"
    >
      <Link to={`/product/${product._id}`} className="product-card">
        <div className="product-image-wrapper">
          <img 
            src={product.image} 
            alt={product.name} 
          />
          <div className="product-category-tag">
            {product.category}
          </div>
        </div>
        <div className="product-info">
          <div>
            <h3 className="product-name">{product.name}</h3>
            <p className="product-meta">{product.description.substring(0, 50)}...</p>
          </div>
          <p className="product-price">${product.price}</p>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
