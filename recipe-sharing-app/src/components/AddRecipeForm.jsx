import React, { useState } from 'react';

const AddRecipeForm = ({ addRecipe }) => {
  const [newRecipe, setNewRecipe] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newRecipe) {
      addRecipe(newRecipe);
      setNewRecipe(''); // Clear the input after adding
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter recipe name"
        value={newRecipe}
        onChange={(e) => setNewRecipe(e.target.value)}
      />
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default AddRecipeForm;
