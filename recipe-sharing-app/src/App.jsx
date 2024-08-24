import React from 'react';
import RecipeList from './components/RecipeList.jsx';
import AddRecipeForm from './components/AddRecipeForm.jsx/index.js';
import useRecipeStore from './stores/useRecipeStore';

function App() {
  const recipes = useRecipeStore((state) => state.recipes);
  const addRecipe = useRecipeStore((state) => state.addRecipe);

  return (
    <div>
      <h1>My Recipe App</h1>
      <AddRecipeForm addRecipe={addRecipe} />
      <RecipeList recipes={recipes} />
    </div>
  );
}

export default App;
