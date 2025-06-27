import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ContactUs from "./components/ContactUsPage";
import ProductsPage from "./components/ProductsPage";

function App(){
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
    </Router>
  );
}

export default App;