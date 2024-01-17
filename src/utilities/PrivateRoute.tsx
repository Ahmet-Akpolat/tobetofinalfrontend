import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsAuthenticated } from "../store/slices/authSlice";

const PrivateRoute = ({ children }: any) => {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
