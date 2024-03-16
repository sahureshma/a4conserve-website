import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from "./Component/Homepage/Homepage";
import Home from "./Component/Homepage/Home";
import About from "./Component/About/About";
import Services from "./Component/Services/Services";
import Blogs from "./Component/Blogs/Blogs";
import Product from "./Component/Product/Product";
import Contact from "./Component/Contact/Contact";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/homepage" element={<Homepage/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/blogs" element={<Blogs/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </Router>
  );
}

export default App;