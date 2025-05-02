import React from "react";
import { useSelector } from "react-redux";
import { FaSignInAlt, FaShoppingCart, FaRegistered } from "react-icons/fa";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();
  const state = useSelector((state) => state.handleCart);
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#" className="logo">
          Ca<span>rtify</span>
        </a>
        <div className="navbar-list">
          <ul>
            <li>
              <Link to="/">Home</Link>
              <motion.div
                className="Line"
                transition={{ duration: 0.25 }}
                initial={{ width: "0%" }}
                animate={{ width: pathname === "/" ? "50%" : "0%" }}
              ></motion.div>
            </li>
            <li>
              <Link to="/products">Products</Link>
              <motion.div
                className="Line"
                transition={{ duration: 0.25 }}
                initial={{ width: "0%" }}
                animate={{ width: pathname === "/products" ? "50%" : "0%" }}
              ></motion.div>
            </li>
            <li>
              <Link to="/about">About</Link>
              <motion.div
                className="Line"
                transition={{ duration: 0.25 }}
                initial={{ width: "0%" }}
                animate={{ width: pathname === "/about" ? "50%" : "0%" }}
              ></motion.div>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
              <motion.div
                className="Line"
                transition={{ duration: 0.25 }}
                initial={{ width: "0%" }}
                animate={{ width: pathname === "/contact" ? "50%" : "0%" }}
              ></motion.div>
            </li>
          </ul>
          <div className="buttons">
            <button>
              <Link to="/register">
                <FaRegistered /> Register
              </Link>
            </button>
            <button className="btn-login">
              <Link to="/login">
                <FaSignInAlt /> Login
              </Link>
            </button>
            <button className="btn-cart">
              <Link to="/cart">
                <FaShoppingCart /> Cart({state.length})
              </Link>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
