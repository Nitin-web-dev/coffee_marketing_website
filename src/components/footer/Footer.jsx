import React from "react";
import facebookicon from "../../assets/icons8-facebook-48.png";
import twittericon from "../../assets/icons8-twitter-circled-48.png";
import youtubeicon from "../../assets/icons8-youtube-music-48.png";
import instagramicon from "../../assets/icons8-instagram-48.png";
import "./Footer.css"
const Footer = () => {
  return (
    <footer>
      <section className="footerSection">
        <div className="upperFooterSection">
          <div className="digitalMarketingServicesSide">
            <h2>Digital Marketing Services</h2>
            <ul>
              <li>
                <a href="/#">Social Media Marketing</a>
              </li>
              <li>
                <a href="/#">Influencer Marketing</a>
              </li>
              <li>
                <a href="/#">Website Development</a>
              </li>
              <li>
                <a href="/#">Performance Marketing</a>
              </li>
              <li>
                <a href="/#">Event Marketing</a>
              </li>
              <li>
                <a href="/#">Digital Consultancy</a>
              </li>
              <li>
                <a href="/#">SEO Services</a>
              </li>
              <li>
                <a href="/#">Branding Strategy</a>
              </li>
              <li>
                <a href="/#">Shopify Development</a>
              </li>
              <li>
                <a href="/#">Content Writing</a>
              </li>
              <li>
                <a href="/#">Video Production</a>
              </li>
              <li>
                <a href="/#">Instragram Marketing</a>
              </li>
            </ul>
            <a href="/#">
              <img src={facebookicon} alt="socialmedia" />
            </a>
            <a href="/#">
              <img src={twittericon} alt="socialmedia" />
            </a>
            <a href="/#">
              <img src={youtubeicon} alt="socialmedia" />
            </a>
            <a href="/#">
              <img src={instagramicon} alt="socialmedia" />
            </a>
          </div>
          <div className="industriesWeServeSide">
            <h2>Industries We Serve</h2>
            <ul>
              <li>
                <a href="/#">Retail</a>
              </li>
              <li>
                <a href="/#">Health care</a>
              </li>
              <li>
                <a href="/#">Real estate</a>
              </li>
              <li>
                <a href="/#">Education</a>
              </li>
              <li>
                <a href="/#">FMCG</a>
              </li>
              <li>
                <a href="/#">Ecommerce</a>
              </li>
              <li>
                <a href="/#">IT-tech-SAAS</a>
              </li>
              <li>
                <a href="/#">Manufacturing</a>
              </li>
              <li>
                <a href="/#">Jewelry</a>
              </li>
              <li>
                <a href="/#">Beauty adn salon</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="LowerFooterSection">
          <div>
            <h3>+91-9176402555</h3>
            <h5>Mon-Fri: 9AM-6PM</h5>
          </div>
          <div>
            <h3>bde@echovme.com</h3>
            <h5>online support</h5>
          </div>
          <div>
            <h3>echoVME Digital</h3>
            <p>
              1A, Sapna trade Centre, 135, Poonamallee High Road, <br />Pursaiwalkam,<br />
              Chennai 600084
            </p>
          </div>
        </div>
        <div className="cpyrt">
          Copyright &#169; 2023 by <span>echoVME Digital</span>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
