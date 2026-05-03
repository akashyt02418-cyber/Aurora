import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${searchQuery}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : 'not-scrolled'}`}>
      <div className="container flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-tighter" style={{ fontFamily: 'var(--font-serif)' }}>
          AURORA<span style={{ color: 'var(--accent-primary)' }}>.</span>
        </Link>

        {/* Desktop Links */}
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="nav-icons">
          <AnimatePresence>
            {isSearchOpen ? (
              <motion.form 
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: '200px', opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                onSubmit={handleSearch}
                style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: '2px' }}
              >
                <input 
                  autoFocus
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="SEARCH..." 
                  style={{ background: 'transparent', border: 'none', outline: 'none', fontSize: '10px', letterSpacing: '0.1em', color: 'white', width: '100%' }}
                />
                <button type="button" onClick={() => setIsSearchOpen(false)} style={{ fontSize: '8px', opacity: 0.5, marginLeft: '8px' }}>ESC</button>
              </motion.form>
            ) : (
              <span onClick={() => setIsSearchOpen(true)} className="nav-icon">Search</span>
            )}
          </AnimatePresence>
          
          <Link to="/cart" style={{ position: 'relative' }}>
            <span className="nav-icon">Bag</span>
            <span className="cart-count">0</span>
          </Link>

          {/* Hamburger Bar */}
          <div 
            className={`hamburger ${isMenuOpen ? 'open' : ''}`} 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ type: 'tween', duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mobile-menu"
          >
            <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/shop" onClick={() => setIsMenuOpen(false)}>Shop</Link>
            <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            
            <div style={{ marginTop: '2rem', textAlign: 'center' }}>
               <span className="nav-icon" style={{ opacity: 0.4 }}>AURORA DESIGN STUDIO</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
