/**
 * @jest-environment jsdom
 */
 import { render, screen } from '@testing-library/react';
 import '@testing-library/jest-dom';
 import Home from '@/pages/index';
 
 describe('Home Component', () => {
  test('renders div with specific test id', () => {
    render(<Home />);
    
    // Query the div by its test id
    const divElement = screen.getByTestId('Test');
    
    // Assert that the div is rendered in the document
    expect(divElement).toBeInTheDocument();
  });
});