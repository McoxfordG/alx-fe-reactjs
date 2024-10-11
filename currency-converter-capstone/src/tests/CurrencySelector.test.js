import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CurrencySelector from '../components/CurrencySelector';
import { currencyCountryMap } from '../utils/currencyMap';

test('renders CurrencySelector and handles selection change', () => {
  const handleCurrencyChange = jest.fn();
  const currencies = ['USD', 'EUR', 'GBP'];
  render(<CurrencySelector currencies={currencies} selectedCurrency="USD" handleCurrencyChange={handleCurrencyChange} />);

  const select = screen.getByRole('combobox');
  expect(select).toBeInTheDocument();
  expect(select.value).toBe('USD');

  fireEvent.change(select, { target: { value: 'EUR' } });
  expect(handleCurrencyChange).toHaveBeenCalledWith('EUR');
});
