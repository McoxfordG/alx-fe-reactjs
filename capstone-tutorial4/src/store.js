// src/store.js
import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  query: "",
  isLoading: false,
  setRecipes: (recipes) => set({ recipes }),
  setQuery: (query) => set({ query }),
  setLoading: (loading) => set({ isLoading: loading }),
}));

export default useRecipeStore;
