import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function ShopPage() {
  return (
    <div>
      <header>
        <h1>Shop</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>

      <section className="product-list">
        <h2>Our Products</h2>
        <div className="product">
          <h3>Classic</h3>
          <img src="/coffee1.jpg" alt="Coffee 1" width="200" height="200" />
          <p>Our first handcrafted and brewed coffee beans.</p>
          <p>$9.99</p>
          <button>Add to Cart</button>
        </div>
        <div className="product">
          <h3>Quality</h3>
          <img src="/coffee2.jpg" alt="Coffee 2" width="200" height="200" />
          <p>Later down the line, we came up with the most quality rich coffee beans.</p>
          <p>Each brew of this, holds very rich and satisfying taste, which keeps you satisfied.</p>
          <p>$12.99</p>
          <button>Add to Cart</button>
        </div>
        {/* Add more products here */}
      </section>

      <footer>
        <p>&copy; 2024 My Coffee Shop. All rights reserved.</p>
        <Link to="/purchase" className="purchase-button">Proceed to Purchase</Link>
      </footer>
    </div>
  );
}

export default ShopPage;
