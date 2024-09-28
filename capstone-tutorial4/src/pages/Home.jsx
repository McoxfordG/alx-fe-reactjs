// src/pages/Home.jsx
import { useEffect } from "react";
import React from "react";
import Recipecard from "../components/Recipecard";
import SearchBar from "../components/SearchBar";
import useRecipeStore from "../store"; // Import Zustand store
import axios from 'axios';
import "../App.css";

const apiUrl = 'https://api.edamam.com/api/recipes/v2';

function Home() {
  const { recipes, query, isLoading, setQuery, setLoading, setRecipes } = useRecipeStore();

  const searchRecipe = async () => {
    setLoading(true);
    try {
      const res = await axios.get(apiUrl, {
        params: {
          type: 'public',
          q: query,
          app_id: '57f35749',
          app_key: 'f4ff1bf1c39b5b963ccbcc71335ef438',
          health: 'vegetarian',
        },
      });
      setRecipes(res.data.hits.map(hit => hit.recipe));
    } catch (error) {
      console.error("Error fetching recipes:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    searchRecipe();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    searchRecipe();
  };

  return (
    <div>
      <h2>Our Recipes</h2>
      <SearchBar
        handleSubmit={handleSubmit}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        isLoading={isLoading}
      />
      <div className="recipes">
        {recipes.length ? (
          recipes.map((recipe, index) => (
            <Recipecard key={index} recipe={recipe} />
          ))
        ) : (
          "No Recipes!"
        )}
      </div>
    </div>
  );
}

export default Home;
