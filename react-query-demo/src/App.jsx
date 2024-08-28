import React, { useState } from "react";
import PostsComponent from "./components/PostsComponent";
import HomeComponent from "./components/HomeComponent";

const App = () => {
  const [currentComponent, setCurrentComponent] = useState('home');
  
  return (
    <div>
      <nav>
        <button onClick={() => setCurrentComponent('home')}>Home</button>
        <button onClick={() => setCurrentComponent('Posts')}>Posts</button>
      </nav>
      {currentComponent === 'home' && <HomeComponent/>}
      {currentComponent === 'posts' && <PostsComponent/>}
    </div>
  );
};

export default App;