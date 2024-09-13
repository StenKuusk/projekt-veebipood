import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router, MemoryRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../src/components/homepage';
import userEvent from '@testing-library/user-event';

//Renderdamis test
test('renders HomePage without crashing', () => {
  render(
    <Router>
      <HomePage />
    </Router>
  );
});

//Navigeerimis renderdamis test
test('renders navigation links correctly', () => {
  render(
    <Router>
      <HomePage />
    </Router>
  );
  const homeLink = screen.getByText(/Home/i);
  const aboutLink = screen.getByText(/About/i);
  const contactLink = screen.getByText(/Contact/i);
  expect(homeLink).toBeInTheDocument();
  expect(aboutLink).toBeInTheDocument();
  expect(contactLink).toBeInTheDocument();
});

//Kontrollib, kas kuvatakse õiged pildid
test('renders featured products section with correct images', () => {
  render(
    <Router>
      <HomePage />
    </Router>
  );
  const coffee1Image = screen.getByAltText(/Coffee 1/i);
  const coffee2Image = screen.getByAltText(/Coffee 2/i);
  expect(coffee1Image).toBeInTheDocument();
  expect(coffee2Image).toBeInTheDocument();
});

//Navigeerimis test 
test('navigation buttons work correctly', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<div>About Page</div>} />
        <Route path="/contact" element={<div>Contact Page</div>} />
      </Routes>
    </MemoryRouter>
  );

  userEvent.click(screen.getByText(/About/i));
  expect(screen.getByText(/about/i)).toBeInTheDocument();

  userEvent.click(screen.getByText(/Contact/i));
  expect(screen.getByText(/contact/i)).toBeInTheDocument();

  userEvent.click(screen.getByText(/Home/i));
  expect(screen.getByText(/Discover Your Perfect Brew/i)).toBeInTheDocument();
});