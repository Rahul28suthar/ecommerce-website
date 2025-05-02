import React from "react";
import "./styles/app.scss";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Products from "./components/Products";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Register from "./components/Register";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <AnimatePresence>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/products" element={<Products />} />
            <Route exact path="/products/:id" element={<Product />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </AnimatePresence>
      </div>
      <Footer />
    </div>
  );
}

export default App;
