import React from "react";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
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
          <li>About me</li>
          <li>Projects</li>
          <li>Certifications</li>
          <li>Contact me</li>
        </ul>
      </nav>
    </header>
  );
}
