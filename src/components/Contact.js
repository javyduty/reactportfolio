import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Contact.css';
import profileImage from './image/profile.jpeg'

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-header">
        <div className="profile-image">
          <img src={profileImage} alt="Profile" />
        </div>
        <h2>
          <span id="single-char">C</span>ontact <span id="single-char">M</span>e
        </h2>
        <p>The best way to contact me is via <a className="email-link" href="mailto:javydutyalante@gmail.com">- Email -</a></p>
      </div>
      <div className="contact-links">
        <a href="https://www.facebook.com/javier.santana.165" className="btn contact-details">
        <FontAwesomeIcon icon={faFacebookSquare} /> Facebook
        </a>
        <a href="https://github.com/javyduty" className="btn contact-details">
        <FontAwesomeIcon icon={faGithub} /> GitHub
        </a>
        <a href="https://www.linkedin.com/in/javier-santana-018832123/" className="btn contact-details">
        <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
        </a>
      </div>
    </section>
  );
};

export default Contact;
