import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__section">
          <h2 className="footer__title">ShopSmart</h2>
          <p>Your one-stop shop for the latest gadgets, fashion, and more.</p>
        </div>

        <div className="footer__section">
          <h3 className="footer__heading">Quick Links</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Shop</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="footer__section">
          <h3 className="footer__heading">Support</h3>
          <ul>
            <li>
              <a href="#">FAQs</a>
            </li>
            <li>
              <a href="#">Shipping & Returns</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
          </ul>
        </div>

        <div className="footer__section">
          <h3 className="footer__heading">Follow Us</h3>
          <div className="footer__socials">
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        &copy; {new Date().getFullYear()} ShopSmart. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
