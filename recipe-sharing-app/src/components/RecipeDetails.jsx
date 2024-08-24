import React from 'react';
import { useParams } from 'react-router-dom';
import useRecipeStore from '../stores/useRecipeStore';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === parseInt(id))
  );

  if (!recipe) {
    return <div>Recipe not found!</div>;
  }

  return (
    <div>
      <h2>{recipe.name}</h2>
      <p>Recipe ID: {recipe.id}</p>
      {/* Add more details as necessary */}
    </div>
  );
};

export default RecipeDetails;
