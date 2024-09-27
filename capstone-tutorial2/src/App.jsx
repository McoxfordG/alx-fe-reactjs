import { useState, useEffect } from "react";
import React from "react";
import Recipecard from "./components/Recipecard";
import SearchBar from "./components/SearchBar";
import "./App.css"

const apiUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState(""); // Default search query for testing
  const [recipes, setRecipes] = useState([]);

  const searchRecipe = async () => {
    setIsLoading(true);
    const url = apiUrl + query; // Concatenate the query dynamically
    const res = await fetch(url);
    const data = await res.json();
    console.log(data); // Log data to ensure it's being fetched
    setRecipes(data.meals); // Assuming 'meals' is where the recipe data resides
    setIsLoading(false);
  };

  // Call searchRecipe when the component mounts
  useEffect(() => {
    searchRecipe();
  }, []); // Empty dependency array ensures it runs once

  const handleSubmit = e => {
    e.preventDefault()
    searchRecipe()
};
  return (
    <div className="container">
      <h2>Our Recipe</h2>
      <SearchBar
      handleSubmit={handleSubmit}
      value={query}
      onChange={e => setQuery(e.target.value)}
      isLoading={isLoading}
      />
      <div className="recipes">
        {recipes ? recipes.map(recipe => (
          <Recipecard 
          key={recipe.idMeal}
          recipe={recipe}
          />
        )): "No Recipes!"};
      </div>
    </div>
  );
}

export default App;
