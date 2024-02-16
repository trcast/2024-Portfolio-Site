import React from "react";
import ContactSection from "../components/sections/ContactSection";
import SectionHeader from "../components/SectionHeader";
import "../styles/contact.css";

const ContactPage = () => {
  return (
    <section className="contact-page-container">
      <div className="container">
        <SectionHeader title="contact" reverse={false} />
        <ContactSection />
      </div>
    </section>
  );
};

export default ContactPage;
