import React from "react";
import Navbar from "./components/All/Navbar";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Services from "./pages/Services";
import Products from "./pages/Products";
import SignUp from "./pages/SignUp";
import Coaches from "./pages/Coaches";
import Values from "./pages/Values";

// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/services" exact element={<Services />} />
          <Route path="/coaches" exact element={<Coaches />} />
          <Route path="/products" exact element={<Products />} />
          <Route path="/sign-up" exact element={<SignUp />} />
          <Route path="/values" exact element={<Values />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
