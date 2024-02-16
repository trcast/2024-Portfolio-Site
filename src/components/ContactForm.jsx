import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/contact.css";
import SendBlack from "/assets/brand/send-black.svg";
import SuccessIcon from "/assets/brand/success-icon.svg";
import ButtonSm from "./ButtonSm";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_9b2oa5i";
    const templateId = "template_1qk5tef";
    const publicKey = "6Zlt-pq-lGXILchRh";

    const templateParams = {
      name: name,
      email: email,
      subject: subject,
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
        setMessageSent(true);
      })
      .catch((error) => {
        console.error("Error Sending Email", error);
      });
  };

  const handleNewMessage = () => {
    setMessageSent(false);
  };

  return (
    <>
      {messageSent ? (
        <div className="success-container">
          <div className="success-box">
            <img src={SuccessIcon} alt="" />
            <h6 className="white">Sucessfully Sent</h6>
          </div>
          <button className="sm-btn-white" onClick={handleNewMessage}>
            <p>Send Another Message</p>
            <img src={SendBlack} alt="" />
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <textarea
            cols="30"
            rows="10"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button className="sm-btn-white" type="submit">
            <p>Send Message</p>
            <img src={SendBlack} alt="" />
          </button>
        </form>
      )}
    </>
  );
};

export default ContactForm;
