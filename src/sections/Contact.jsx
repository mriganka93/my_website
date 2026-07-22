import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2 className="section-title">Let's Talk</h2>
        <p className="section-subtitle">
          Whether you want to collaborate, discuss an opportunity, 
          or just say hello — I'm always happy to connect.
        </p>

        <div className="contact-strips">
          <a 
            href="mailto:mriganka206@protonmail.com" 
            className="contact-strip"
          >
            <div className="strip-icon">
              <FaEnvelope size={34} />
            </div>
            <div className="strip-content">
              <h3>Email</h3>
              <p>mriganka206@protonmail.com</p>
            </div>
          </a>

          <a 
            href="https://linkedin.com/in/mriganka1993" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="contact-strip"
          >
            <div className="strip-icon">
              <FaLinkedin size={34} />
            </div>
            <div className="strip-content">
              <h3>LinkedIn</h3>
              <p>Connect with me professionally</p>
            </div>
          </a>

          <a 
            href="https://github.com/mriganka93" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="contact-strip"
          >
            <div className="strip-icon">
              <FaGithub size={34} />
            </div>
            <div className="strip-content">
              <h3>GitHub</h3>
              <p>Check out my code</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;