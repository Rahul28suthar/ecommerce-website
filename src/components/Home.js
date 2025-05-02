import React from "react";
import bkg from "../images/bkg.jpg";

const Home = () => {
  return (
    <div className="hero">
      <div className="hero-container">
        <div className="hero-img" style={{ backgroundImage: `url(${bkg})` }}>
          <div className="hero-content">
            <h5>NEW ARRIVALS </h5>
            <p>CHECK OUT ALL THE TRENDS.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
