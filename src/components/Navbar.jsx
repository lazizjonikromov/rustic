import React from "react";
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <div className="navBar w-full z-10">
      <div className="container">
        <div className="row">
          <div className="col-6 col-sm-8  col-lg-2">
            <a href="/">
              <img src={logo} alt="" />
            </a>
          </div>
          <div className="col-md-7 d-none d-lg-flex">
            <ul className="nav-menu d-flex gap-5 align-items-center">
              <li className="active">
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/">Projects</a>
              </li>
              <li>
                <a href="/">Posts</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-sm-4 col-lg-3 d-flex lang__burg">
            <ul className="d-flex gap-3 gap-sm-5">
              <li>
                <a href="/">End</a>
              </li>
              <li>
                <a href="/">Fra</a>
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
