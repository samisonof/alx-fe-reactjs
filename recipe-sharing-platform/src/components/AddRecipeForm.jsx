import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [errors, setErrors] = useState({});

  // Validation function
  const validate = () => {
    const newErrors = {};

    if (!title) {
      newErrors.title = 'Recipe title is required.';
    }

    if (!ingredients) {
      newErrors.ingredients = 'Ingredients are required.';
    } else {
      const ingredientsArray = ingredients.split(',');
      if (ingredientsArray.length < 2) {
        newErrors.ingredients = 'Please include at least two ingredients.';
      }
    }

    if (!steps) {
      newErrors.steps = 'Preparation steps are required.';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form inputs
    const validationErrors = validate();

    // Check if there are any errors
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // If no errors, proceed with form submission
    console.log({
      title,
      ingredients: ingredients.split(','),
      steps,
    });

    // Clear form after successful submission
    setTitle('');
    setIngredients('');
    setSteps('');
    setErrors({});
  };

  return (
    <div className="max-w-xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Add New Recipe</h1>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Recipe Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 ${
              errors.title ? 'border-red-500' : ''
            }`}
            placeholder="Enter recipe title"
          />
          {errors.title && <p className="text-red-500 mt-2">{errors.title}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Ingredients (comma-separated)</label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className={`w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 ${
              errors.ingredients ? 'border-red-500' : ''
            }`}
            rows="3"
            placeholder="e.g., flour, sugar, butter"
          />
          {errors.ingredients && (
            <p className="text-red-500 mt-2">{errors.ingredients}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Preparation Steps</label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className={`w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 ${
              errors.steps ? 'border-red-500' : ''
            }`}
            rows="5"
            placeholder="Enter preparation steps"
          />
          {errors.steps && <p className="text-red-500 mt-2">{errors.steps}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 transition duration-200"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
