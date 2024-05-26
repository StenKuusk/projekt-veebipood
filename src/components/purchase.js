import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function PurchasePage() {
  return (
    <div>
      <header>
        <h1>Purchase</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>

      <section className="purchase-section">
        <h2>Enter Payment Details</h2>
        <form action="/success">
          <label htmlFor="card-number">Card Number:</label>
          <input type="text" id="card-number" name="card-number" required />
          <label htmlFor="expiry-date">Expiry Date:</label>
          <input type="text" id="expiry-date" name="expiry-date" required />
          <label htmlFor="cvv">CVV:</label>
          <input type="text" id="cvv" name="cvv" required />
          <button type="submit">Purchase</button>
        </form>
      </section>

      <footer>
        <p>&copy; 2024 My Coffee Shop. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default PurchasePage;
