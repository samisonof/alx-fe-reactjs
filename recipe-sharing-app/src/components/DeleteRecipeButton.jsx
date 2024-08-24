import React from 'react';
import { useNavigate } from 'react-router-dom';
import useRecipeStore from '../stores/useRecipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteRecipe(recipeId); // Call the deleteRecipe action from the Zustand store
    navigate('/'); // Redirect to the home page after deleting the recipe
  };

  return (
    <button onClick={handleDelete}>
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
