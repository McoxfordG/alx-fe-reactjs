import React from 'react';

const ConversionResult = ({ amount, convertedAmount, fromCurrency, toCurrency }) => {
  return (
    <div className="mt-4 p-4 bg-gray-500 rounded">
      <h2 className="text-xl font-semibold">
        {amount} {fromCurrency} = {convertedAmount ? convertedAmount.toFixed(4) : '...'} {toCurrency}
      </h2>
    </div>
  );
};

export default ConversionResult;