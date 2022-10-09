import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('render login component in the document', () => {
  render(<App />);
  const formNode = screen.getByTestId('form-element');
  expect(formNode).toBeInTheDocument();
});

test('render intro login component in the document', () => {
  render(<App />);
  const introFormNode = screen.getByTestId('intro-form');
  expect(introFormNode).toBeInTheDocument();
})