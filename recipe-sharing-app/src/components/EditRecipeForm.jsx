import React, { useState, useEffect } from 'react';
import { useRecipeStore } from './recipeStore';

const EditRecipeForm = ({ recipeId, onClose }) => {
    const recipes = useRecipeStore((state) => state.recipes);
    const updateRecipe = useRecipeStore((state) => state.updateRecipe);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        const recipe = recipes.find((r) => r.id === recipeId);
        if (recipe) {
            setTitle(recipe.title);
            setDescription(recipe.description);
        }
    }, [recipeId, recipes]);

    const handleSubmit = (event) => {
        event.preventDefault();
        updateRecipe({ id: recipeId, title, description });
        onClose(); 
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
            />
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
            />
            <button type="submit">Update Recipe</button>
        </form>
    );
};

export default EditRecipeForm;
