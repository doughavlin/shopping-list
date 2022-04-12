import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App defaultList={[
  { name: "first", description: "first item in list", quantity: 2, purchased: true },
  { name: "second", description: "second item in list", quantity: 1, purchased: false },
]} />);