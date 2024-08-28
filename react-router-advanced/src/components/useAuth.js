import { useState, useEffect } from 'react';

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Simulate authentication check (e.g., checking for a token)
  useEffect(() => {
    // Replace with real authentication logic, such as checking for a JWT token in localStorage
    const token = localStorage.getItem('token');  // Example
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  return { isAuthenticated };
};
