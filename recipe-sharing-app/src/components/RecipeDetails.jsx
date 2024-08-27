import React, { useState } from 'react';
import { useRecipeStore } from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = ({ recipeId }) => {
    const [isEditing, setIsEditing] = useState(false);
    const recipe = useRecipeStore(state => 
        state.recipes.find(recipe => recipe.id === recipeId)
    );

    if (!recipe) return <p>Recipe not found</p>;

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleCloseEdit = () => {
        setIsEditing(false);
    };

    return (
        <div>
            {isEditing ? (
                <EditRecipeForm recipeId={recipeId} onClose={handleCloseEdit} />
            ) : (
                <>
                    <h1>{recipe.title}</h1>
                    <p>{recipe.description}</p>
                    <button onClick={handleEditClick}>Edit</button>
                    <DeleteRecipeButton recipeId={recipeId} />
                </>
            )}
        </div>
    );
};

export default RecipeDetails;
