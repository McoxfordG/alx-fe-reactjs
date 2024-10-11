import React from 'react';
import { render, screen } from '@testing-library/react';
import ConversionResult from '../components/ConversionResult';

test('renders ConversionResult with correct conversion', () => {
  render(<ConversionResult amount={100} convertedAmount={80} fromCurrency="USD" toCurrency="EUR" />);

  const result = screen.getByText(/100 USD = 80.0000 EUR/i);
  expect(result).toBeInTheDocument();
});
