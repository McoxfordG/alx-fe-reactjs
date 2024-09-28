// src/components/Recipecard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import "../App.css";

const Recipecard = ({ recipe }) => {
  const { label, image, uri } = recipe; // Adjust properties based on actual API response

  const id = uri.split("_")[1];  // Extract the ID from the URI

  return (
    <div className='card'>
      <img src={image} alt={label} className='card-image' />
      <div className="card-body">
        <h3>{label}</h3>
        <Link to={`/recipe/${id}`}>View Details</Link>
      </div>
    </div>
  );
}

export default Recipecard;
