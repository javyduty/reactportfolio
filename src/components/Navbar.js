import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faAddressCard } from '@fortawesome/free-solid-svg-icons'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-scroll';
import '../App.css';

const Navbar = () => {
  return (
    <nav id="navbar">
        {/* <a className="nav-link" href="#"><FontAwesomeIcon icon={faHome} /></a> */}
        <Link
            className="nav-link"
            to="welcome-section"
            smooth={true}
            duration={100}
            offset={-50}
            spy={true}
            activeClass="active"
          ><FontAwesomeIcon icon={faHome} /></Link>
        <Link
            className="nav-link"
            to="about-me-section"
            smooth={true}
            duration={100}
            offset={-50}
            spy={true}
            activeClass="active"
          ><FontAwesomeIcon icon={faAddressCard} /></Link>
        <Link
            className="nav-link"
            to="projects-section"
            smooth={true}
            duration={100}
            offset={-50}
            spy={true}
            activeClass="active"
        ><FontAwesomeIcon icon={faBriefcase} /></Link>
        <Link
            className="nav-link"
            to="contact-section"
            smooth={true}
            duration={100}
            offset={-50}
            spy={true}
            activeClass="active"
        ><FontAwesomeIcon icon={faEnvelope} /></Link>
    </nav>
  );
};

export default Navbar;
