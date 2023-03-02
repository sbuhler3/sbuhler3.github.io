import React from "react";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const handleClick = () => setNavOpen(!navOpen);
  return (
    <header>
      <nav>
        <img src={logo} className="logo" alt="spencer logo" />
        <GiHamburgerMenu
          className="mobileNav"
          size={50}
          onClick={handleClick}
        />
        <ul className={navOpen ? "navItems expanded" : "navItems"}>
          <li>
            <Link to="/"> About me</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/certifications">Certifications</Link>
          </li>
          <li>Contact me</li>
        </ul>
      </nav>
    </header>
  );
}
