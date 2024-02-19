import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate,useLocation  } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const location = useLocation();
  const navigate = useNavigate();

    useEffect(()=>{ 
      if (!token && location.pathname !== "/Login"){
      navigate("/Login");
    }},[token,location, navigate])
   

  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setToken(newToken);
  };

  // const removeToken = () => {
  //   localStorage.removeItem("token");
  //   setToken(null);
  // }

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    navigate("/Login");
  };


  return (
    <AuthContext.Provider value={{ token, updateToken , logout}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  
  return useContext(AuthContext);
};