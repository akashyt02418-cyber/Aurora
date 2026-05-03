import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const cartItems = [];

  return (
    <div className="cart-page">
      <div className="container">
        <h1 className="cart-title">Your Bag</h1>

        {cartItems.length === 0 ? (
          <div className="cart-empty">
            <p className="cart-empty-text">Your bag is currently empty.</p>
            <Link to="/shop" className="luxury-button" style={{ display: 'inline-block' }}>Continue Shopping</Link>
          </div>
        ) : (
          <div className="cart-layout">
            <div className="cart-items">
              {/* Cart items would be mapped here */}
            </div>
            <div className="cart-summary">
              <h3 className="summary-title">Summary</h3>
              <div className="summary-details">
                <div className="summary-row">
                  <span className="summary-label">Subtotal</span>
                  <span>$0.00</span>
                </div>
                <div className="summary-row">
                  <span className="summary-label">Shipping</span>
                  <span>Calculated at checkout</span>
                </div>
              </div>
              <div className="summary-total">
                <span>Total</span>
                <span className="total-price">$0.00</span>
              </div>
              <button className="luxury-button" style={{ width: '100%' }}>
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
