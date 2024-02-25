import React, { useState } from "react";
import logo from "../assets/logo.png";
import logoBlack from "../assets/logo-black.png";
import { Link, useLocation } from "react-router-dom";
import Menu from "./Menu";

const Navbar = ({ setBurger }) => {
  const [navbar, setNavbar] = useState(false);

  const location = useLocation();

  const changeNavbar = () => {
    if (window.scrollY >= 30) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeNavbar);

  return (
    <div
      className={`navBar w-full z-10 ${
        (navbar && location.pathname === "/") ||
        (navbar && location.pathname === "/about")
          ? "active"
          : ""
      } ${
        location.pathname === "/projects" ||
        location.pathname === "/posts" ||
        location.pathname === "/contact"
          ? "nav-white"
          : ""
      }`}
    >
      <div className="container">
        <div className="row">
          <div className="col-6 col-sm-8 col-lg-2">
            <Link to={"/"}>
              {location.pathname === "/projects" ||
              location.pathname === "/posts" ||
              location.pathname === "/contact" ? (
                <img src={logoBlack} alt="" />
              ) : (
                <img src={logo} alt="" />
              )}
            </Link>
          </div>
          <div className="col-md-7 d-none d-lg-flex">
            <ul className="nav-menu d-flex gap-5 align-items-center">
              <li className={`${location.pathname === "/" ? "active" : ""}`}>
                <Link to={"/"}>Home</Link>
              </li>
              <li
                className={`${location.pathname === "/about" ? "active" : ""}`}
              >
                <Link to={"/about"}>About</Link>
              </li>
              <li
                className={`${
                  location.pathname === "/projects" ? "active" : ""
                }`}
              >
                <Link to={"/projects"}>Projects</Link>
              </li>
              <li
                className={`${location.pathname === "/posts" ? "active" : ""}`}
              >
                <Link to={"/posts"}>Posts</Link>
              </li>
              <li
                className={`${
                  location.pathname === "/contact" ? "active" : ""
                }`}
              >
                <Link to={"/contact"}>Contact</Link>
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
              <i onClick={() => setBurger(true)} className="bi bi-list"></i>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
