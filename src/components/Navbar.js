import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => (
  <div className="navbar">
    <Link to="/"><h1>Claire Galya</h1></Link>
    <div>
      <Link to="/work">Work</Link>
      <Link to="/about">About</Link>
      <Link to="/">Contact</Link>
    </div>
  </div>
);

export default Navbar;