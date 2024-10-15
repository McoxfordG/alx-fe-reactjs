import React from 'react';
import { currencyCountryMap } from '../utils/currencyMap'; 

const CurrencySelector = ({ currencies, selectedCurrency, handleCurrencyChange }) => {

  const sortedCurrencies = currencies.sort((a, b) => {
    const countryA = currencyCountryMap[a]?.split(' ')[0] || a;
    const countryB = currencyCountryMap[b]?.split(' ')[0] || b;
    return countryA.localeCompare(countryB);
  });

  return (
    <div className="mb-4">
      <label className="block text-lg mb-2">Currency</label>
      <select
        value={selectedCurrency}
        onChange={(e) => handleCurrencyChange(e.target.value)}
        className="border p-2 w-full bg-green-200"
      >
        {sortedCurrencies.map((currency) => (
          <option key={currency} value={currency}>
            {currencyCountryMap[currency] ? currencyCountryMap[currency] : `${currency}`}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencySelector;
