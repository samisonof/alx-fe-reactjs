import React from 'react';
import useRecipeStore from '../stores/useRecipeStore';
import { Link } from 'react-router-dom';

const RecommendationsList = () => {
  // Fetch favorite recipes from the store
  const favoriteRecipes = useRecipeStore((state) => state.favoriteRecipes());

  if (favoriteRecipes.length === 0) {
    return <p>No recommendations available. Add some recipes to your favorites!</p>;
  }

  return (
    <div>
      <h2>Recommended Recipes</h2>
      <ul>
        {favoriteRecipes.map((recipe) => (
          <li key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <Link to={`/recipes/${recipe.id}`}>View Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecommendationsList;
