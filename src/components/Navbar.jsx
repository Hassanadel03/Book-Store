import { FaBars, FaTimes } from "react-icons/fa";
import React, { useRef, useState } from "react";
import "../Navbar.css";

const Navbar = () => {
  const navRef = useRef();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const showNavbar = () => {
    setIsNavOpen(!isNavOpen); // Toggle the state
  };

  const linkStyles = {
    color: "#b4c09f", // Replace with your main color
    textDecoration: "none",
    margin: "50px", // Adjust the margin as needed
  };

  return (
    <header>
      <h2>Book4u </h2>
      <nav className={isNavOpen ? "responsive_nav" : ""} ref={navRef}>
        <a href="/" style={linkStyles}>
          Home
        </a>
        <a href="/" style={linkStyles}>
          books
        </a>
        <a href="/" style={linkStyles}>
          cart
        </a>
        <a href="/" style={linkStyles}>
          sign in
        </a>
        <a href="/" style={linkStyles}>
          sign up
        </a>
      </nav>
      {isNavOpen ? (
        <button className="nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      ) : (
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      )}
    </header>
  );
};

export default Navbar;
