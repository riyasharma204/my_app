import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";

const PrivateRoute = ({ element, ...rest }) => {
  const { token } = useAuth();

  return token ? <Route {...rest} element={element} /> : <Navigate to="/Login" replace />;
};

export default PrivateRoute;
