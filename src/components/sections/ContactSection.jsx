import React from "react";
import "../../styles/contact.css";
import ContactForm from "../ContactForm";

const ContactSection = () => {
  return (
    <div className="contact-section-container">
      <div className="contact-info-container">
        <h6 className="white semibold">Let's Work Togehter!</h6>
        <p className="dark-gray">
          Have a question or a project in mind? Feel free to reach out! I'm here
          to help turn your ideas into reality.
        </p>
      </div>
      <div className="contact-form-container">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactSection;
