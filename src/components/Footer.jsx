import React from "react";
import "../styles/footer.css";
import Logo from "/assets/brand/logo-name.svg";
import Email from "/assets/brand/social/email.svg";
import LinkedIn from "/assets/brand/social/linkedin.svg";
import Github from "/assets/brand/social/github.svg";
import Copyright from "/assets/brand/social/copyright.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="name-contact-container">
          <Link to={"/"}>
            <img src={Logo} alt="" />
          </Link>
          <div className="phone-email-container">
            <img src={Email} alt="" />
          </div>
        </div>
        <div className="socials-container">
          <div className="social-icons-container">
            <a href="https://github.com/trcast" target="blank">
              <img src={Github} alt="" />
            </a>
            <a
              href="https://www.linkedin.com/in/theresa-castellucci-082a67232/"
              target="blank"
            >
              <img src={LinkedIn} alt="" />
            </a>
          </div>
          <img src={Copyright} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
