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
            <Link to="/" className="link" onClick={handleClick}>
              {" "}
              About me
            </Link>
          </li>
          <li>
            <Link to="/projects" className="link" onClick={handleClick}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/certifications" className="link" onClick={handleClick}>
              Certifications
            </Link>
          </li>
          <li>
            <a
              className="link"
              href="mailto:buhler.spencer33@gmail.com"
              onClick={handleClick}
            >
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
