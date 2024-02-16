import React from "react";
import "../styles/homepage.css";

const ButtonSm = ({ title, image, darkmode }) => {
  return (
    <button className={darkmode ? "sm-btn-black" : "    sm-btn-white"}>
      <p>{title}</p>
      <img src={image} alt="" />
    </button>
  );
};

export default ButtonSm;
