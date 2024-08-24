import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import EditRecipeForm from './components/EditRecipeForm';
import useRecipeStore from './stores/useRecipeStore';

function App() {
  const recipes = useRecipeStore((state) => state.recipes);
  const addRecipe = useRecipeStore((state) => state.addRecipe);

  return (
    <Router>
      <div>
        <h1>My Recipe App</h1>
        <Routes>
          {/* Home route displaying AddRecipeForm and RecipeList */}
          <Route
            path="/"
            element={
              <>
                <AddRecipeForm addRecipe={addRecipe} />
                <RecipeList recipes={recipes} />
              </>
            }
          />
          {/* Route for displaying recipe details */}
          <Route path="/recipes/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
