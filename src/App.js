import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navigationbar";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import Posts from"./pages/Posts";
import Portofolio from "./pages/Portofolio";
import Products from "./pages/Products";
import './App.css';

function App() {
  return (
    <Router>
      <Navbar /> 
      <div className="container">
        <Routes>
          <Route path="/contact" element={<Contacts />} />
          <Route path="/home" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/portfolio" element={<Portofolio />} />
          <Route path="/products" element={<Products/>}/>
  
        </Routes> 
      </div>
    </Router>
  );
}


export default App;
