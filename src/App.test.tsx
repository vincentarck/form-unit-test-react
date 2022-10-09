import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('render login component in the document', () => {
  render(<App />);
  const formNode = screen.getByTestId<HTMLElement>('form-element');
  expect(formNode).toBeInTheDocument();
});

test('render intro login component in the document', () => {
  render(<App />);
  const introFormNode = screen.getByTestId<HTMLElement>('intro-form');
  expect(introFormNode).toBeInTheDocument();
})