import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage'; // Import HomePage component
import RecipeDetail from './components/RecipeDetail'; // Import RecipeDetail component
import AddRecipeForm from './components/AddRecipeForm';


function App() {
  return (
    <Router>
      <Routes>
        {/* HomePage route */}
        <Route path="/" element={<HomePage />} />
        
        {/* RecipeDetail route with dynamic id */}
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
