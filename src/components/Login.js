import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import login from "../images/login.jpg";
import { motion } from "framer-motion";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("registeredUser"));
    if (
      storedUser &&
      username === storedUser.username &&
      password === storedUser.password
    ) {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/");
    } else {
      alert("Invalid credentials");
    }
  }

  return (
    <motion.div
      className="login-page"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
    >
      <div className="login-left">
        <form className="login-form" onSubmit={handleLogin}>
          <h1 className="logo">
            Ca<span>rtify</span>
          </h1>
          <p className="welcome-text">Welcome back !!!</p>
          <h2 className="sign-in-title">Sing in</h2>

          <label>Email</label>
          <input
            type="text"
            placeholder="Enter your email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="forgot-link">
            <Link to="#">Forgot Password?</Link>
          </div>

          <button type="submit" className="login-btn">
            SIGN IN →
          </button>

          <p className="signup-text">
            Don’t have an account? <Link to="/register">Sign up</Link>
          </p>
        </form>
      </div>

      <div className="login-right">
        <img src={login} alt="Illustration" className="illustration" />
      </div>
    </motion.div>
  );
};

export default Login;
