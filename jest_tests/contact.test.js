import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ContactPage from '../src/components/contact';
import axios from 'axios';
import { BrowserRouter as Router } from 'react-router-dom';

jest.mock('axios');

beforeEach(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {});
});

afterEach(() => {
  console.error.mockRestore();
});

//Renderdamis test
describe('ContactPage', () => {
  test('renders a contact form', () => {
    render(
      <Router>
        <ContactPage />
      </Router>
    );

    expect(screen.getByText('Contact Us')).toBeInTheDocument();
    expect(screen.getByLabelText('Name:')).toBeInTheDocument();
    expect(screen.getByLabelText('Email:')).toBeInTheDocument();
    expect(screen.getByLabelText('Message:')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });


//Vormi esitamise test
  test('submits a message', async () => {
    render(
      <Router>
        <ContactPage />
      </Router>
    );

    fireEvent.change(screen.getByLabelText('Name:'), { target: { value: 'Siim Liiv' } });
    fireEvent.change(screen.getByLabelText('Email:'), { target: { value: 'Siimliiv@gmail.com' } });
    fireEvent.change(screen.getByLabelText('Message:'), { target: { value: 'Tere!' } });
    fireEvent.click(screen.getByRole('button'));

    expect(axios.post).toHaveBeenCalledWith('http://localhost:3001/contact', {
      name: 'Siim Liiv',
      email: 'Siimliiv@gmail.com',
      message: 'Tere!'
    });
});

//Vea käsitlemise test
  test('handles an error', async () => {
    render(
        <Router>
          <ContactPage />
        </Router>
      );
    
    fireEvent.change(screen.getByLabelText('Name:'), { target: { value: 'Siim Liiv' } });
    fireEvent.change(screen.getByLabelText('Email:'), { target: { value: 'Siimliiv@gmail.com' } });
    fireEvent.change(screen.getByLabelText('Message:'), { target: { value: 'Tere!' } });
    fireEvent.click(screen.getByRole('button'));
    });
});