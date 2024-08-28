import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Profile from "./components/Profile";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  const isAuthenticated = true
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Profile/*" element={<Profile />}/>
        <Route path="/blog/:postId" element={<BlogPost />} />
        <Route path="/Profile/*" element={<ProtectedRoute isAuthenticated={isAuthenticated}>
          <Profile />
        </ProtectedRoute>
        }
        />
   
      </Routes>
    </Router>
  );
};

export default App; 
