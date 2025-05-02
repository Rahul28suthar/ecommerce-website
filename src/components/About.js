import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      className="about-container"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="about-title">
        About <span className="Ca">Ca</span>
        <span>rtify</span>
      </h1>
      <p className="about-tagline">Revolutionizing your shopping experience</p>

      <div className="about-content">
        <motion.div
          className="about-text"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h2>Who We Are</h2>
          <p>
            Cartify is a customer-first e-commerce platform, designed to make
            your online shopping simple, smooth, and secure. We bring together
            quality products, seamless UI, and blazing-fast service, so you get
            the best from every click.
          </p>
          <h2>Our Mission</h2>
          <p>
            To build trust through transparency and deliver happiness through
            every order.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
