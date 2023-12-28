import React, { useState, useEffect, useRef } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMugHot,
  faChevronDown,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    // console.log(isMenuOpen)
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  });





  const handleOutsideClick = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target) && e.target.id !== 'bars') {
      setMenuOpen(false);
    }
    // console.log(e.target)
  
  };

  const stopPropagation = (event) => {
    event.stopPropagation();
  };


  return (
    <div>
      <header>
        <div>
          <h2 className="logo">
            Lavista <FontAwesomeIcon icon={faMugHot} />
          </h2>
        </div>

        <nav>
          <div className="mobilesection">
            <span className="bars" onClick={toggleMenu}>
              <FontAwesomeIcon icon={faBars} id="bars"/>
            </span>
            <div
              className={`mobileMenu ${isMenuOpen ? "MenuOpen" : ""}`}
              ref={menuRef} onClick={stopPropagation}
            >
              <ul>
                <li>
                  <a href="/#">Our Story </a>
                </li>
                <li className="dropdown">
                  <span href="/#" className="dropbtn">
                    services <FontAwesomeIcon icon={faChevronDown} />
                    <div className="dropdown-content">
                      <a href="/#">Social Media Marketing</a>
                      <a href="/#">Influencer Marketing</a>
                      <a href="/#">Website Development</a>
                      <a href="/#">Performance Marketing</a>
                      <a href="/#">Event Marketing</a>
                      <a href="/#">Digital Consultancy</a>
                      <a href="/#">SEO Services</a>
                      <a href="/#">Branding Strategy</a>
                      <a href="/#">Shopify Development</a>
                      <a href="/#">Content Writing</a>
                      <a href="/#">Video Production</a>
                      <a href="/#">Instragram Marketing</a>
                    </div>
                  </span>
                </li>
                <li>
                  <a href="/#">Products </a>
                </li>
                <li>
                  <a href="/#">Work With Us </a>
                </li>
                <li>
                  <a href="/#">Our Institute </a>
                </li>
                <li>
                  <a href="/#">Blog </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="webMenu">
            <ul>
              <li>
                <a href="/#">Our Story </a>
              </li>
              <li className="dropdown">
                <span href="/#" className="dropbtn">
                  services <FontAwesomeIcon icon={faChevronDown} />
                  <div className="dropdown-content">
                    <a href="/#">Social Media Marketing</a>
                    <a href="/#">Influencer Marketing</a>
                    <a href="/#">Website Development</a>
                    <a href="/#">Performance Marketing</a>
                    <a href="/#">Event Marketing</a>
                    <a href="/#">Digital Consultancy</a>
                    <a href="/#">SEO Services</a>
                    <a href="/#">Branding Strategy</a>
                    <a href="/#">Shopify Development</a>
                    <a href="/#">Content Writing</a>
                    <a href="/#">Video Production</a>
                    <a href="/#">Instragram Marketing</a>
                  </div>
                </span>
              </li>
              <li>
                <a href="/#">Products </a>
              </li>
              <li>
                <a href="/#">Work With Us </a>
              </li>
              <li>
                <a href="/#">Our Institute </a>
              </li>
              <li>
                <a href="/#">Blog </a>
              </li>
            </ul>
          </div>
        </nav>

        <div>
          <button className="getaQuoteBtn">Get A Quote</button>
        </div>
      </header>
    </div>
  );
};

export default Header;
