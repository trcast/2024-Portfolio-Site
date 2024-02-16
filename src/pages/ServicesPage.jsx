import React from "react";
import { useEffect } from "react";
import ServicesSection from "../components/sections/ServicesSection";
import SectionHeader from "../components/SectionHeader";
import "../styles/services-preview.css";

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section>
      <div className="container service-page-container">
        <SectionHeader title="Services" reverse={false} />
        <ServicesSection />
      </div>
    </section>
  );
};

export default ServicesPage;
