import React, { Children } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isAuthenticated, childern}) => {
    return isAuthenticated ? childern : <Navigate to="/"/>;
};

export default ProtectedRoute;