import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AmountInput from '../components/AmountInput';

test('renders AmountInput component and handles input change', () => {
  const handleAmountChange = jest.fn();
  render(<AmountInput amount={100} handleAmountChange={handleAmountChange} />);

  const input = screen.getByRole('spinbutton'); 
  expect(input).toBeInTheDocument();
  expect(input.value).toBe('100');

  fireEvent.change(input, { target: { value: '200' } });
  expect(handleAmountChange).toHaveBeenCalledWith('200');
});
