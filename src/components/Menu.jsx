import React from "react";
import LogoBlack from '../assets/logo-black.png';
import { Link } from "react-router-dom";

const Menu = ({ burger, setBurger }) => {
  return (
    <div className={`off__menu ${burger ? "active" : ""}`}>
      <div className="off__canvas-modal" onClick={() => (setBurger(false))}></div>
      <nav className="off__menu-lists">
        <ul>
          <li className="d-flex align-items-center justify-content-between pb-5">
            <img src={LogoBlack} alt="" />
            <svg onClick={() => setBurger(false)} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg>
          </li>
          <li className="off__lists-text">
            <Link onClick={() => setBurger(false)} to={"/"}>Home</Link>
          </li>
          <li className="off__lists-text">
            <Link onClick={() => setBurger(false)} to={"/about"}>About</Link>
          </li>
          <li className="off__lists-text">
            <Link onClick={() => setBurger(false)} to={"/projects"}>Projects</Link>
          </li>
          <li className="off__lists-text">
            <Link onClick={() => setBurger(false)} to={"/posts"}>Posts</Link>
          </li>
          <li className="off__lists-text">
            <Link onClick={() => setBurger(false)} to={"/contact"}>Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
