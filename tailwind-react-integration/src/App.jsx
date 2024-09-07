import React from "react";
import "./index.css"; // Import Tailwind CSS
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <div className="user-profile bg-gray-100 p-4 sm:p-8 max-w-xs sm:max-w-sm mx-auto my-20 rounded-lg shadow-lg">
    <img className="rounded-full w-24 h-24 sm:w-24 sm:h-24 md:w-36 md:h-36 mx-auto" src="https://via.placeholder.com/150" alt="User"/>
    <h1 className="text-lg sm:text-xl md:text-2xl text-blue-800 my-4">John Doe</h1>
    <p className="text-sm sm:text-base md:text-lg text-gray-600">Developer at Example Co. Loves to write code and explore new technologies.</p>
        <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
          Click Me
        </button>
      </div>
    
  );
}

export default App;
