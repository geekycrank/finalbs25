
//import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/bslogo.png";

function Navbar() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className="navbarr">
      <div className="nav-container">
        <div className="nav-left">
          <img src={logo} alt="logo" className="logo" />
          <h2 className="brainstrain">BrainStrain '25</h2>
        </div>

        <div className="nav-links">
          <Link to="/" className={currentPath === "/" ? "active" : ""}>Home</Link>
          <Link to="/Events" className={currentPath === "/Events" ? "active" : ""}>Events</Link>
          <Link to="/Register" className={currentPath === "/Register" ? "active" : ""}>Register</Link>
          <Link to="/Ca" className={currentPath === "/Ca" ? "active" : ""}>Referral Code</Link>
          {(currentPath !== "/Events" && currentPath !== "/Register" && currentPath !== "/Ca") && (
            <a href="#Contact" className={currentPath === "#Contact" ? "active" : ""}>Contact</a>
          )}
        </div>
      </div>
    </nav>
  );
}
export default Navbar;