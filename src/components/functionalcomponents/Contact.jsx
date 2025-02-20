import React from "react";
import "../css/Contact.css";
import contactImg from "../pictures/contact.png";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2 className="heading">
        <i className="fas fa-headset"></i> Get in <span>Touch</span>
      </h2>

      <div className="container">
        <div className="image-box">
          <img src={contactImg} alt="Contact" />
        </div>

        <form id="contact-form">
          <div className="form-group">
            <div className="field">
              <input type="text" name="name" placeholder="Name" required />
              <i className="fas fa-user"></i>
            </div>
            <div className="field">
              <input type="email" name="email" placeholder="Email" required />
              <i className="fas fa-envelope"></i>
            </div>
            <div className="field">
              <input type="text" name="phone" placeholder="Phone" />
              <i className="fas fa-phone-alt"></i>
            </div>
            <div className="message">
              <textarea
                placeholder="Message"
                name="message"
                required
              ></textarea>
              <i className="fas fa-comment-dots"></i>
            </div>
          </div>
          <div className="button-area">
            <button type="submit">
              Submit <i className="fa fa-paper-plane"></i>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
