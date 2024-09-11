import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple front-end validation
    if (title.trim() === '' || ingredients.trim() === '' || steps.trim() === '') {
      setError('All fields are required.');
      return;
    }

    // Check if at least two ingredients are listed
    const ingredientsArray = ingredients.split(',');
    if (ingredientsArray.length < 2) {
      setError('Please include at least two ingredients.');
      return;
    }

    // Post the form data (Here, you could send the data to an API or update state)
    console.log({
      title,
      ingredients: ingredientsArray,
      steps,
    });

    // Clear the form after submission
    setTitle('');
    setIngredients('');
    setSteps('');
    setError('');
  };

  return (
    <div className="max-w-xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Add New Recipe</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Recipe Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Enter recipe title"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Ingredients (comma-separated)</label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            rows="3"
            placeholder="e.g., flour, sugar, butter"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Preparation Steps</label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            rows="5"
            placeholder="Enter preparation steps"
          />
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
