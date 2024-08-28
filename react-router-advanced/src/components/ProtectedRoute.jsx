import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';  // Import useAuth hook

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();  // Use the useAuth hook

  if (!isAuthenticated) {
    return <Navigate to="/" />;  // Redirect to the home page if not authenticated
  }

  return children;
};

export default ProtectedRoute;
