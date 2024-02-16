import React from "react";
import "../App.css";
import "../styles/homepage.css";
import Line from "/assets/brand/section-line.svg";

const SectionHeader = (props) => {
  return (
    <div
      className={props.reverse ? "section-header-reverse" : "section-header"}
    >
      <img src={Line} alt="" className="section-line-mobile" />
      <p className="white uppercase">{props.title}</p>
      <img src={Line} alt="" />
    </div>
  );
};

export default SectionHeader;
