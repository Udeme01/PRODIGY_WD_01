import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home/Home";
import About from "./Pages/About";
import Product from "./Pages/Product";
import Support from "./Pages/Support";

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/support" element={<Support />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
