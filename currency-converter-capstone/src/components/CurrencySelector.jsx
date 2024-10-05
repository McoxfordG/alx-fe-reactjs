import React from 'react';

const CurrencySelector = ({ currencies, selectedCurrency, handleCurrencyChange }) => {
  return (
    <div className="mb-4">
      <label className="block text-lg mb-2">Currency</label>
      <select
        value={selectedCurrency}
        onChange={(e) => handleCurrencyChange(e.target.value)}
        className="border p-2 w-full bg-green-200"
      >
        {currencies.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencySelector;