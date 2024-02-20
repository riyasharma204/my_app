import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";

const ProtectedRoute = ({ element, ...props }) => {
  const { token } = useAuth();

  return token ? (
    <Route {...props} element={element} />
  ) : (
    <Navigate to="/Login" state={{ from: props.location }} replace />
  );
};

export default ProtectedRoute;
