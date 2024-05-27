import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';

function ContactPage() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/contacted');
  }

  return (
    <div>
      <header>
        <h1>Contact Us</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>

      <section className="contact-section">
        <h2>Get in Touch</h2>
        <p>If you have any questions or feedback, feel free to reach out to us!</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      <footer>
        <p>&copy; 2024 My Coffee Shop. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default ContactPage;