import { create } from "zustand";

export const useRecipeStore = create(set => ({
    recipes: [],
    addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes,]})),
    setRecipes: (recipes) => set({ recipes})
}));

