import { create } from 'zustand';
import axios from 'axios';

const useCurrencyStore = create((set) => ({
  currencies: [],
  exchangeRate: null,
  fromCurrency: 'USD',
  toCurrency: 'EUR',
  amount: 1,
  convertedAmount: null,
  fetchRates: async (fromCurrency, toCurrency) => {
    try {
      const response = await axios.get(`https://v6.exchangerate-api.com/v6/edee7c3e8d1be1da2712902e/latest/USD`);
      set({
        currencies: Object.keys(response.data.conversion_rates),
        exchangeRate: response.data.conversion_rates[toCurrency],
      });
    } catch (error) {
      console.error('Error fetching exchange rates:', error);
    }
  },
  setFromCurrency: (currency) => set({ fromCurrency: currency }),
  setToCurrency: (currency) => set({ toCurrency: currency }),
  setAmount: (amount) => set({ amount: parseFloat(amount) }),
  calculateConvertedAmount: () =>
    set((state) => ({
      convertedAmount: state.amount * state.exchangeRate,
    })),
}));

export default useCurrencyStore;
