import React from "react";
import facebook from "../images/facebook.png";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <a href="https://github.com/sbuhler3" target="_blank" rel="noreferrer">
        <img src={github} className="icon" alt="social media icon" />
      </a>
      <a
        href="https://www.facebook.com/spencer.buhler"
        target="_blank"
        rel="noreferrer"
      >
        <img src={facebook} className="icon" alt="social media icon" />
      </a>
      <a
        href="https://www.linkedin.com/in/spencer-buhler-331623118/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={linkedin} className="icon" alt="social media icon" />
      </a>
    </aside>
  );
}
