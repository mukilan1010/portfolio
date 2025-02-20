import "../css/NavBar.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <nav>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/skills">Skills</Link>
        </li>

        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/education">Educations</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </nav>
    </header>
  );
};

export default NavBar;
