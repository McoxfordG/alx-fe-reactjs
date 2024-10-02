import React from 'react';

const AmountInput = ({ amount, handleAmountChange }) => {
  return (
    <div className="mb-4">
      <label className="block text-lg mb-2">Amount</label>
      <input
        type="number"
        value={amount}
        onChange={(e) => handleAmountChange(e.target.value)}
        className="border p-2 w-full"
      />
    </div>
  );
};

export default AmountInput;
