import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch('/path/to/data.json')
      .then(response => response.json())
      .then(data => {
        const foundRecipe = data.find(recipe => recipe.id === parseInt(id));
        setRecipe(foundRecipe);
      });
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4 shadow-lg rounded-lg bg-white">
      {/* Apply shadow class to give the card-like layout some depth */}
      <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover rounded-lg shadow-md" />
      <h1 className="text-4xl font-bold mt-4">{recipe.title}</h1>
      <p className="text-gray-700 mt-2">{recipe.summary}</p>

      <h2 className="text-2xl font-semibold mt-6">Ingredients</h2>
      <ul className="list-disc list-inside mt-2">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold mt-6">Instructions</h2>
      <p className="mt-2">{recipe.instructions}</p>
    </div>
  );
};

export default RecipeDetail;
