import React from "react";
import "./index.css"; // Import Tailwind CSS
import UserProfile from "./components/UserProfile";
function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm">
        <h1 className="text-2xl font-bold text-gray-800">Hello, Tailwind!</h1>
        <p className="text-gray-600 mt-4">
          This is a simple React app styled with Tailwind CSS.
        </p>
        <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
          Click Me
        </button>
      </div>
    </div>
  );
}

export default App;
