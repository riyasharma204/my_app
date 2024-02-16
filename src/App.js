import { Container } from '@mui/system';
import React from 'react';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Login from './components/Login';
import SignUp from './components/SignUp';
import Appbar from './components/Appbar';
import Blog from './components/Blog';
import DrawerComp from './components/DrawerComp';
import Navbar from './components/Navbar';
import GridCard from './components/GridCard';
import Aboutus from './components/Aboutus';
import Contactus from './components/Contactus';
import Footer from './components/Footer';
import Axios from './components/Axios';
import AxiosPost from './components/AxiosPost';
import AxiosGrid from './components/AxiosGrid';
import './App.css';
 
function App() {
  return (
    <React.Fragment> 
    <Router > 
    <Navbar /> 
    <div className="background-image"> 
      <React.Fragment>
      <Container>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/" element={<SignUp />} />
          <Route path="/Appbar" element={<Appbar />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Navbar" element={<Navbar />} />
          {/* <Route path="/DrawerComp" element={<DrawerComp />} /> */}
          <Route path="/GridCard" element={<GridCard />} />  
          <Route path="/Aboutus" element={<Aboutus />} />  
          <Route path="/Contactus" element={<Contactus />} />
          <Route path="/Footer" element={<Footer />} />
          <Route path="/Axios" element={<Axios />} />
          <Route path="/AxiosGrid" element={<AxiosGrid />} />
          <Route path="/AxiosPost" element={<AxiosPost />} />
        </Routes> 
      </Container>
    </React.Fragment>
    </div>
    <Footer /> 
  </Router>
    {/* <AxiosGrid /> */}
   </React.Fragment>
  );
}
 
export default App;