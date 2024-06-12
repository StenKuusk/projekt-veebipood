import React from 'react';
<<<<<<< HEAD
import { Link, useLocation } from 'react-router-dom';
import '../App.css';
=======
import { Link } from 'react-router-dom';
>>>>>>> fa665e28b6c99f043fe88dcc9d374cbe40ec2d8e
import './purchase.css';

function PurchasePage() {
  const location = useLocation();
  const totalPrice = location.state ? location.state.totalPrice : 0;

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
        <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
        <form action="/success">
          <label htmlFor="card-number">Card Number:</label>
          <input type="text" id="card-number" name="card-number" required />
          <label htmlFor="expiry-date">Expiry Date:</label>
          <input type="text" id="expiry-date" name="expiry-date" required />
          <label htmlFor="cvv">CVV:</label>
          <input type="text" id="cvv" name="cvv" required />
          <button className="submit" type="submit">Purchase</button>
        </form>
      </section>

      <footer>
        <p>&copy; 2024 My Coffee Shop. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default PurchasePage;
