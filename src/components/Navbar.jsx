import React, { useState } from "react";
import logo from '../assets/logo.png';
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const location = useLocation();

  const changeNavbar = () => {
      if (window.scrollY >= 30) {
          setNavbar(true);
      } else {
          setNavbar(false)
      }
  }

  window.addEventListener('scroll', changeNavbar);

  return (
    <div className={`navBar w-full z-10 ${navbar ? 'active' : ''}`}>
      <div className="container">
        <div className="row">
          <div className="col-6 col-sm-8 col-lg-2">
            <Link to={"/"}>
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className="col-md-7 d-none d-lg-flex">
            <ul className="nav-menu d-flex gap-5 align-items-center">
              <li className={`${location.pathname === '/' ? 'active' : ''}`}>
                <Link to={"/"}>Home</Link>
              </li>
              <li className={`${location.pathname === '/about' ? 'active' : ''}`}>
                <Link to={"/about"}>About</Link>
              </li>
              <li className={`${location.pathname === '/projects' ? 'active' : ''}`}>
                <Link to={"/"}>Projects</Link>
              </li>
              <li className={`${location.pathname === '/posts' ? 'active' : ''}`}>
                <Link to={"/"}>Posts</Link>
              </li>
              <li className={`${location.pathname === '/contact' ? 'active' : ''}`}>
                <Link to={"/"}>Contact</Link>
              </li>
            </ul>
          </div>
          <div className="col-6 col-sm-4 col-lg-3 d-flex lang__burg">
            <ul className="d-flex gap-3 gap-sm-5">
              <li>
                <Link to={"/"}>End</Link>
              </li>
              <li>
                <Link to={"/"}>Fra</Link>
              </li>
            </ul>

            <div className="burger">
              <i className="bi bi-list"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
