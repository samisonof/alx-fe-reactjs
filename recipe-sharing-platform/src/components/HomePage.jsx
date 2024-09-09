import { data } from "autoprefixer";
import React,{ useState, useEffect } from "react";

const HomePage = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() =>{
        fetch('/path/to/data.json')
        .then(response => response.json())
        .then(data => setRecipes(data));
    }, []);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div key={recipe.id} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img className="w-full h-48 object-cover" src={recipe.image} alt={recipe.title} />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
                <p className="text-gray-600">{recipe.summary}</p>
              </div>
            </div>
            </div>
          ))}
        </div>
      );
    };      

export default HomePage;