"use client";

import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import "../app/styles/header.css";
import Link from "next/link";

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
          <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className="navbar-link">
          <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li className="navbar-link">
          <Link href="/shoes">
              <a>Collections</a>
            </Link>
          </li>
          <li className="navbar-link">
          <Link href="/contact">
              <a>Contact</a>
            </Link>
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
          <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className="navbar-link">
          <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li className="navbar-link">
          <Link href="/shoes">
              <a>Collections</a>
            </Link>
          </li>
          <li className="navbar-link">
          <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
