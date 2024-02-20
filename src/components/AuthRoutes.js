import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './AuthProvider';
import Appbar from './Appbar';
import Login from './Login';

const AuthRoutes = () => {
//   const { token } = useAuth();

const token = localStorage.getItem("token");
console.log(token)

  return token ? (
    <Routes>
      <Route path="/" element={token ? <Appbar /> : <Login/>} />
      <Route path="/Blog" element={<Blog />} />
      <Route path="/Aboutus" element={<Aboutus />} />
      <Route path="/Contactus" element={<Contactus />} />
      <Route path="/Axios" element={<Axios />} />
      <Route path="/AxiosGrid" element={<AxiosGrid />} />
      <Route path="/AxiosPost" element={<AxiosPost />} />
    </Routes>
  ) : (
    <Navigate to="/login" replace />
  );
};

const AppRoutes = () => (
  <Routes>
    <Route path="/Login" element={<Login />} />
    <Route element={<AuthRoutes />} />
  </Routes>
);

export default AppRoutes;
