import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/homepage';
import AboutPage from './components/about';
import ContactPage from './components/contact';
import ShopPage from './components/shop';
import PurchasePage from './components/purchase';
import SuccessPage from './components/success';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Welcome to My Coffee Shop</h1>
        </header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/purchase" element={<PurchasePage />} />
          <Route path="/success" element={<SuccessPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;