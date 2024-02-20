import React from "react";
import "../../styles/about-preview.css";
import Profile from "/assets/brand/social/profile.png";
import Figma from "/assets/brand/tools/figma.svg";
import ReactImg from "/assets/brand/tools/react.svg";
import AfterEffects from "/assets/brand/tools/aftereffects.svg";
import Illustrator from "/assets/brand/tools/illustrator.svg";
import Photoshop from "/assets/brand/tools/photoshop.svg";
import ArrowSm from "/assets/brand/arrow-sm-black.svg";
import Download from "/assets/brand/download-black.svg";
import { NavLink } from "react-router-dom";
import Resume from "/assets/work/resume.pdf";

const AboutPreviewSection = () => {
  const handleDownload = () => {
    window.open(Resume, "_blank");
  };

  return (
    <div className="about-container">
      <div className="about-img-container">
        <img src={Profile} alt="" />
      </div>
      <div className="about-info-container">
        <div className="about-bio-container">
          <p className="white">
            With over seven years of experience in graphic design and motion
            graphics, my journey as a creative professional has been defined by
            a profound passion for all things art and design. As a firm believer
            in the power of multidisciplinary expertise, I consider a
            well-rounded artist to be one who excels in various disciplines. My
            dedication to this philosophy is reflected in my commitment to
            continually expand my skills across the realms of web design,
            graphic design, and motion graphics.
          </p>
        </div>
        <div className="about-tools-container">
          {/* <div className="tool-chip">
            <img src={ReactImg} alt="" />
            <p>React</p>
          </div> */}
          <div className="tool-chip">
            <img src={AfterEffects} alt="" />
            <p>After Effects</p>
          </div>
          <div className="tool-chip">
            <img src={Illustrator} alt="" />
            <p>Illustrator</p>
          </div>
          <div className="tool-chip ">
            <img src={Figma} alt="" />
            <p>Figma</p>
          </div>
          <div className="tool-chip">
            <img src={Photoshop} alt="" />
            <p>Photoshop</p>
          </div>
        </div>
        <div className="about-btn-container">
          <NavLink to="/about" className="link-btn">
            <button className="sm-btn-white">
              <p>More About Me</p>
              <img src={ArrowSm} alt="" />
            </button>
          </NavLink>
          <button className="sm-btn-white" onClick={handleDownload}>
            <p>Download Resume</p>
            <img src={Download} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPreviewSection;
