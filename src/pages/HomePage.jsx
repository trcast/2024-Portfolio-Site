import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "../styles/homepage.css";
import Email from "/assets/brand/social/email.svg";
import WorkPreviewSection from "../components/sections/WorkPreviewSection";
import SectionHeader from "../components/SectionHeader";
import ButtonLg from "../components/ButtonLg";
import AboutPreviewSection from "../components/sections/AboutPreviewSection";
import ServicesSection from "../components/sections/ServicesSection";
import ContactSection from "../components/sections/ContactSection";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section id="heroSection">
        <div className="container hero-container">
          <div className="hero-top">
            <h3 className="white">Pixel-Perfect Design</h3>
            <h3 className="white">Code Crafted with Care</h3>
          </div>
          <div className="hero-bottom">
            <div className="hero-contact">
              <p className="white">Get in Touch</p>
              <img src={Email} alt="" />
            </div>
            <div className="hero-bio">
              <p className="white">
                I am a passionate artist dedicated to multidisciplinary design.
                Equipped with a diverse skill set and technical expertise, I
                strive to create engaging digital experiences that transcend
                expectations.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="worksSection">
        <div className="container">
          <SectionHeader title="Selected Works" reverse={false} />
          <WorkPreviewSection projectType="web" />
          <Link to="/works">
            <ButtonLg title="View All Work" />
          </Link>
        </div>
      </section>
      <section id="aboutSection">
        <div className="container">
          <SectionHeader title="About" reverse={true} />
          <AboutPreviewSection />
        </div>
      </section>
      <section id="servicesSection">
        <div className="container">
          <SectionHeader title="Services" reverse={false} />
          <ServicesSection />
        </div>
      </section>
      <section id="contactSection">
        <div className="container">
          <SectionHeader title="Contact" reverse={true} />
          <ContactSection />
        </div>
      </section>
    </>
  );
};

export default HomePage;
