import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import './contacted.css';

const ContactedPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, message }),
        });

        if (response.ok) {
            console.log('Message sent successfully');
        } else {
            console.error('Error sending message');
        }
    };

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

            <section className="message">
                <h2>Message sent!</h2>
                <p>We received your message/feedback and will contact you via email so stay tuned.</p>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} required />
                    <button type="submit">Submit</button>
                </form>
            </section>

            <footer>
                <p>&copy; 2024 My Coffee Shop. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default ContactedPage;