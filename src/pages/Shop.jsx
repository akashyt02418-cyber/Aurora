import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import { motion } from 'framer-motion';
import './Shop.css';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('All');
  const location = useLocation();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/products');
        setProducts(res.data);
      } catch (err) {
        console.error("Error fetching products", err);
      }
    };
    fetchProducts();
  }, []);

  // Parse search query from URL
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('search')?.toLowerCase() || '';

  const categories = ['All', 'Living', 'Tech', 'Decor', 'Accessories'];

  const filteredProducts = products.filter(p => {
    const matchesCategory = category === 'All' || p.category === category;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery) || 
                          p.description.toLowerCase().includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="shop-page">
      <div className="container">
        <header className="shop-header">
          <h1 className="shop-title">
            {searchQuery ? `Search: ${searchQuery}` : 'The Shop'}
          </h1>
          <div className="category-filters">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setCategory(cat)}
                className={`category-btn ${category === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </header>

        {filteredProducts.length > 0 ? (
          <div className="shop-grid">
            {filteredProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-text-secondary text-xl font-light">No products found matching your criteria.</p>
            <button onClick={() => window.history.pushState({}, '', '/shop')} className="luxury-button mt-8">Clear Filters</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
