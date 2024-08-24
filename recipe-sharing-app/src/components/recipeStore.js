import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],

  // Add a new recipe
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, { id: Date.now(), name: newRecipe }],
    })),

  // Delete a recipe by ID
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),

  // Update a recipe by ID
  updateRecipe: (id, updatedName) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === id ? { ...recipe, name: updatedName } : recipe
      ),
    })),
 
 // Set the entire recipes list
 setRecipes: (newRecipes) =>
    set(() => ({
      recipes: newRecipes,
    })),

     // Set search term and trigger filtering
  setSearchTerm: (term) => set({ searchTerm: term }),

  // Derived state: Filtered recipes based on the search term
  filteredRecipes: () =>
    get().recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(get().searchTerm.toLowerCase())
    ),

    favorites: [],
    addFavorite: (recipeId) => set(state => ({ favorites: [...state.favorites, recipeId] })),
    removeFavorite: (recipeId) => set(state => ({
      favorites: state.favorites.filter(id => id !== recipeId)
    })),
    recommendations: [],
    generateRecommendations: () => set(state => {
      // Mock implementation based on favorites
      const recommended = state.recipes.filter(recipe =>
        state.favorites.includes(recipe.id) && Math.random() > 0.5
      );
      return { recommendations: recommended };
    }),
  }));


export default useRecipeStore;
