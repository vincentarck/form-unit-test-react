import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('render login component in the document', () => {
  render(<App />);
  const inputNode = screen.getByTestId('form-element');
  expect(inputNode).toBeInTheDocument();
});

test('render intro login component in the document', () => {
  render(<App />);
  const inputNode = screen.getByTestId('intro-form');
  expect(inputNode).toBeInTheDocument();
})