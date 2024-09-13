import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import ShopPage from '../src/components/shop';

//Renderdamis test
describe('ShopPage Component', () => {
  beforeEach(() => {
    render(
      <Router>
        <ShopPage />
      </Router>
    );
  });

  test('renders initial elements', () => {
    expect(screen.getByText('Shop')).toBeInTheDocument();
    expect(screen.getByText('Our Products')).toBeInTheDocument();
    expect(screen.getByText('Your Cart')).toBeInTheDocument();
    expect(screen.getByText('Total Price: $0.00')).toBeInTheDocument();
  });

  // Ostukorvi lisamise test 
  test('adds items to the cart correctly', () => {
    const addButtons = screen.getAllByText('Add to Cart', { selector: 'button' });
    fireEvent.click(addButtons[0]);
    const cartItems = screen.getAllByText('Classic');
    const totalPrice = screen.getByText('Total Price: $9.99');
    
    expect(cartItems[1]).toBeInTheDocument();
    expect(totalPrice).toBeInTheDocument();

    fireEvent.click(addButtons[1]);
    
    const cartItemsQuality = screen.getAllByText('Quality');
    const updatedTotalPrice = screen.getByText('Total Price: $22.98');
    
    expect(cartItemsQuality[1]).toBeInTheDocument();
    expect(updatedTotalPrice).toBeInTheDocument();
  });

  // Ostukorvist eemaldamise test 
  test('removes items from the cart correctly', () => {
    const addButtons = screen.getAllByText('Add to Cart', { selector: 'button' });
    fireEvent.click(addButtons[0]);
    fireEvent.click(addButtons[1]);

    const removeButtons = screen.getAllByText('Remove from Cart', { selector: 'button' });
    fireEvent.click(removeButtons[0]);
    const cartItems = screen.getAllByText('Classic');
    expect(cartItems.length).toBe(1); 
    expect(screen.getByText('Total Price: $12.99')).toBeInTheDocument();
  });
});