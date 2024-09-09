import React from 'react';
import HomePage from './components/HomePage'; // Adjust the path based on your folder structure

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Component (if you have one) */}
      <header className="bg-blue-500 text-white p-4">
        <h1 className="text-center text-3xl font-bold">Recipe App</h1>
      </header>
      
      {/* Main Content */}
      <main className="p-6">
        <HomePage />
      </main>
      
      {/* Footer Component (if you have one) */}
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2024 Recipe App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
