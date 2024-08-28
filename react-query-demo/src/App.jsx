import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PostsComponent from "./components/PostsComponent";
import HomeComponent from "./components/HomeComponent";


const queryClient = new QueryClient(); 
const App = () => {
  const [currentComponent, setCurrentComponent] = useState('home');
  
  return (
    <QueryClientProvider client={queryClient}>
    <div>
      <nav>
        <button onClick={() => setCurrentComponent('home')}>Home</button>
        <button onClick={() => setCurrentComponent('Posts')}>Posts</button>
      </nav>
      {currentComponent === 'home' && <HomeComponent/>}
      {currentComponent === 'posts' && <PostsComponent/>}
    </div>
    </QueryClientProvider>
  );
};

export default App;