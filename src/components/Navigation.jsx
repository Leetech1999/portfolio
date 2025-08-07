import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <header>
      <div className="header-inner">
        <div className="container">
          <div id="logo">
            <a href="/portfolio">Lee JungJun</a>
          </div>
          <nav>
            <a href="#about">&lt; About /&gt;</a>
            <a href="#skills">&lt; Skills /&gt;</a>
            <a href="#projects">&lt; Projects /&gt;</a>
            <a href="#contact">&lt; Contact /&gt;</a>
          </nav>
        </div>
      </div>
      <div className="custom-shape-divider-top-1656519075">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </header>
  );
}

export default Navigation;
