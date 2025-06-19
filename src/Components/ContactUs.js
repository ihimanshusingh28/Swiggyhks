import React from "react";

const ContactUs = () => {
  return (
    <div className="contact-container">
      <form className="contact-form">
        <input className="input-name" placeholder="Your Name"></input>
        <input className="input-email" placeholder="Your Email"></input>
        <input className="input-phone" placeholder="Phone Number"></input>
        <input className="input-address" placeholder="Address"></input>
      </form>
    </div>
  );
};

export default ContactUs;
