import React, { useState } from 'react';
import useRecipeStore from '../stores/useRecipeStore';

const EditRecipeForm = ({ recipeId, initialRecipeName, onClose }) => {
  const [updatedRecipeName, setUpdatedRecipeName] = useState(initialRecipeName);
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    if (updatedRecipeName.trim()) {
      updateRecipe(recipeId, updatedRecipeName); // Call updateRecipe action
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
