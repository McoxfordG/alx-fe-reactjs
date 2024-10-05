import React, { useEffect } from 'react';
import CurrencySelector from '../components/CurrencySelector';
import AmountInput from '../components/AmountInput';
import ConversionResult from '../components/ConversionResult';
import useCurrencyStore from '../store/useCurrencyStore';

function Converter() {
  const {
    currencies,
    exchangeRate,
    fromCurrency,
    toCurrency,
    amount,
    convertedAmount,
    fetchRates,
    setFromCurrency,
    setToCurrency,
    setAmount,
    calculateConvertedAmount,
  } = useCurrencyStore();

  useEffect(() => {
    fetchRates(fromCurrency, toCurrency);
  }, [fromCurrency, toCurrency]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-4 font-roboto">Currency Converter</h1>
      {/* Currency Selectors */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <CurrencySelector
          currencies={currencies}
          selectedCurrency={fromCurrency}
          handleCurrencyChange={setFromCurrency}
        />
        <CurrencySelector
          currencies={currencies}
          selectedCurrency={toCurrency}
          handleCurrencyChange={setToCurrency}
        />
      </div>
      {/* Amount Input */}
      <AmountInput amount={amount} handleAmountChange={setAmount} />
      
  {/* Button */}
      <div className="text-center mt-4">
        <button
          onClick={calculateConvertedAmount}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Convert
        </button>
      </div>
    {/* Result */}  
      <ConversionResult
        amount={amount}
        convertedAmount={convertedAmount}
        fromCurrency={fromCurrency}
        toCurrency={toCurrency}
      />
    </div>
  );
}

export default Converter;
