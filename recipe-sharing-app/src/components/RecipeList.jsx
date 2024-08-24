import React from 'react';
import useRecipeStore from '../stores/useRecipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
   // Fetch the filtered recipes from the store
   const filteredRecipes = useRecipeStore((state) => state.filteredRecipes());
   const searchTerm = useRecipeStore((state) => state.searchTerm);

  if (recipes.length === 0) {
    return <p>No recipes available.</p>;
  }

  return (
    <ul>
      {recipes.map((recipe) => (
        <li key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <Link to={`/recipes/${recipe.id}`}>View Details</Link>
        </li>
      ))}
    </ul>
  );
};

export default RecipeList;
