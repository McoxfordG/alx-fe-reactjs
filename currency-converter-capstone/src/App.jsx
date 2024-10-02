import React, { useEffect } from 'react';
import CurrencySelector from './components/CurrencySelector';
import AmountInput from './components/AmountInput';
import ConversionResult from './components/ConversionResult';
import useCurrencyStore from './store/useCurrencyStore';

function App() {
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

  useEffect(() => {
    if (exchangeRate) {
      calculateConvertedAmount();
    }
  }, [amount, exchangeRate]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-4">Currency Converter</h1>
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
      <AmountInput amount={amount} handleAmountChange={setAmount} />
      <ConversionResult
        amount={amount}
        convertedAmount={convertedAmount}
        fromCurrency={fromCurrency}
        toCurrency={toCurrency}
      />
    </div>
  );
}

export default App;
