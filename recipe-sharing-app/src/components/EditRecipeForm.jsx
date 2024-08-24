import React, { useState } from 'react';
import useRecipeStore from '../stores/useRecipeStore';

const EditRecipeForm = ({ recipeId, initialRecipeName, onClose }) => {
  const [updatedRecipeName, setUpdatedRecipeName] = useState(initialRecipeName);
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission
    if (updatedRecipeName.trim()) {
      updateRecipe(recipeId, updatedRecipeName); // Update the recipe with the new name
      onClose(); // Close the form after submission
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={updatedRecipeName}
        onChange={(e) => setUpdatedRecipeName(e.target.value)}
        placeholder="Edit recipe name"
      />
      <button type="submit">Save Changes</button>
      <button type="button" onClick={onClose}>Cancel</button>
    </form>
  );
};

export default EditRecipeForm;
