import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Link } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import App from './App';

it('renders Shopping List', () => {
  render(<App />);
  const element = screen.getByText(/Shopping List/);
  expect(element).toBeInTheDocument();
});

it('renders add item button', () => {
  render(<App />)
    const element = screen.getByText(/Add your first item/i)
    expect(element).toBeInTheDocument();  
});

it('renders list of items', () => {
  const defaultList = [
    { name: "first", description: "first item in list", quantity: 2, purchased: true },
    { name: "second", description: "second item in list", quantity: 1, purchased: false },
  ];
  render(<App defaultList={defaultList} />)
    const element = screen.getByText(/second item in list/i)
    expect(element).toBeInTheDocument();  
});
