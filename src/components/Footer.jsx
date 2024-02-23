import React from "react";
import LogoBlack from "../assets/logo-black.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="foot__logo">
            <Link to={"/"}>
              <img src={LogoBlack} alt="" />
            </Link>
          </div>
          <div className="foot__list">
            <h2 className="title mb-0">Contact</h2>
            <ul className="contact-info">
              <li>17 PRINCESS ROAD, LONDON, GREATER LONDON, NW18JR, UK</li>
              <li>
                <a href="#">HELLO@RUSTICSTUDIO.CO</a>
              </li>
              <li>
                <a href="#">(+0084) 912-3548-073</a>
              </li>
            </ul>
          </div>
          <div className="foot__list">
            <h2 className="title mb-0">Quick Links</h2>
            <ul>
              <li>
                <Link to={"/"}>WORKS</Link>
              </li>
              <li>
                <Link to={"/"}>AFFILIATE</Link>
              </li>
              <li>
                <Link to={"/"}>SHOP</Link>
              </li>
              <li>
                <Link to={"/"}>PARTNERS</Link>
              </li>
              <li>
                <Link to={"/"}>REVIEWS</Link>
              </li>
            </ul>
          </div>
          <div className="foot__list">
            <h2 className="title mb-0">Studio</h2>
            <ul>
              <li>
                <Link to={"/"}>ABOUT</Link>
              </li>
              <li>
                <Link to={"/"}>CONTACT</Link>
              </li>
              <li>
                <Link to={"/"}>CAREER</Link>
              </li>
              <li>
                <Link to={"/"}>BLOG</Link>
              </li>
            </ul>
          </div>
          <div className="foot__list">
            <h2 className="title mb-0">Help Center</h2>
            <ul>
              <li>
                <Link to={"/"}>FAQS</Link>
              </li>
              <li>
                <Link to={"/"}>TERMS & CONDITIONS</Link>
              </li>
              <li>
                <Link to={"/"}>PRIVACY POLICY</Link>
              </li>
              <li>
                <Link to={"/"}>HELP</Link>
              </li>
              <li>
                <Link to={"/"}>SERVICES</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            © 2024 <span>RUSTIC</span> Made with © by{" "}
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 1024 1024"
              height="1em"
              color="red"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9z"></path>
            </svg>{" "}
            <span>Laziz Web</span>
          </p>

          <ul>
            <li>
              <a href="#">TWITTER</a>
            </li>
            <li>
              <a href="#">FACEBOOK</a>
            </li>
            <li>
              <a href="#">INSTAGRAM</a>
            </li>
            <li>
              <a href="#">TUMBLR</a>
            </li>
            <li>
              <a href="#">PINTEREST</a>
            </li>
          </ul>

          <ul>
            <li>
              <a href="#">ENG</a>
            </li>
            <li>
              <a href="#">FRE</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
