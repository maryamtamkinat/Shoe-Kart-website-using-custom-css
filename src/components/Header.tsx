"use client";

import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import "../app/styles/header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="nav-container">
      <div className="navbar">
        <div className="navbar-brand">ShoeKart</div>

        {/* Desktop Links */}
        <ul className="navbar-links">
          <li className="navbar-link">
            <a href="/">Home</a>
          </li>
          <li className="navbar-link">
            <a href="/about">About</a>
          </li>
          <li className="navbar-link">
            <a href="/shoes">Collections</a>
          </li>
          <li className="navbar-link">
            <a href="/contact">Contact</a>
          </li>
        </ul>

        {/* Hamburger Icon */}
        <div className="navbar-menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className={`navbar-menu ${isMenuOpen ? "open" : ""}`}>
          <li className="navbar-link">
            <a href="/">Home</a>
          </li>
          <li className="navbar-link">
            <a href="/about">About</a>
          </li>
          <li className="navbar-link">
            <a href="/shoes">Collections</a>
          </li>
          <li className="navbar-link">
            <a href="/contact">Contact</a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
