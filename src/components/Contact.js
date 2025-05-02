import React from "react";

//animation import
import { motion } from "framer-motion";
import { pageAnimation, titleAnimation } from "../animation";

const ContactMe = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      style={{ background: "white" }}
      className="contact"
    >
      <div className="Title">
        <div className="Hide">
          <motion.h2 variants={titleAnimation}>Get In Touch.</motion.h2>
        </div>
      </div>
      <div className="Hide">
        <motion.div className="Social" variants={titleAnimation}>
          <div className="Circle"></div>
          <h2>Send a Message.</h2>
        </motion.div>
      </div>
      <div className="Hide">
        <motion.div className="Social" variants={titleAnimation}>
          <div className="Circle"></div>
          <h2>Send an Email.</h2>
        </motion.div>
      </div>
      <div className="Hide">
        <motion.div className="Social" variants={titleAnimation}>
          <div className="Circle"></div>
          <h2>Social Media.</h2>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactMe;
