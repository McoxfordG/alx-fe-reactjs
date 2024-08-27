import React from "react";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetails from "./components/RecipeDetails";

function App () {
  return (
    <div>
      <RecipeList />
      <AddRecipeForm />
      <RecipeDetails />
    </div>
  );
};

export default App;