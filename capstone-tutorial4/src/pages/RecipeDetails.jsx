// src/pages/RecipeDetails.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const apiUrl = 'https://api.edamam.com/api/recipes/v2';

function RecipeDetails() {
  const { id } = useParams(); // Get the recipe ID from the URL
  const [recipe, setRecipe] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        const res = await axios.get(apiUrl, {
          params: {
            type: 'public',
            q: id, // Use the ID directly for searching
            app_id: '57f35749',
            app_key: 'f4ff1bf1c39b5b963ccbcc71335ef438',
          },
        });

        // Check if there are any recipes returned
        if (res.data.hits.length > 0) {
          setRecipe(res.data.hits[0].recipe); // Get the first recipe from the hits
        } else {
          setRecipe(null); // No recipe found
        }
      } catch (error) {
        console.error("Error fetching recipe details:", error);
        setRecipe(null); // Handle error
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecipeDetails();
  }, [id]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      {recipe ? (
        <div>
          <h1>{recipe.label}</h1>
          <img src={recipe.image} alt={recipe.label} />
          <p>Cuisine Type: {recipe.cuisineType.join(', ')}</p>
          <p>Ingredients: {recipe.ingredientLines.join(', ')}</p>
          <a href={recipe.url} target="_blank" rel="noopener noreferrer">View Full Recipe</a>
        </div>
      ) : (
        <div>No Recipe Found!</div>
      )}
    </div>
  );
}

export default RecipeDetails;
