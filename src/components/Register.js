import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import login from "../images/login.jpg";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    if (password != confirmPassword) {
      alert("Password does not match");
      return;
    }
    localStorage.setItem(
      "registeredUser",
      JSON.stringify({ username, password })
    );
    alert("Registerd successfully");
    navigate("/");
  };
  return (
    <motion.div
      className="register"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5 }}
    >
      <div className="register-left">
        <img src={login} alt="register" />
      </div>
      <div className="register-right">
        <div className="register-container">
          <h1>
            Ca<span>rtify</span>
          </h1>
          <form onSubmit={handleRegister} className="register-form">
            <h2>Register</h2>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button type="submit">Register</button>
          </form>
          <p>
            Already have an Account?<Link to="/login">Sign in</Link>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Register;
