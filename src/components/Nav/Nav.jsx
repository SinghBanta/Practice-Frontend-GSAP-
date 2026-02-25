import React, { useState } from "react";
import { Link } from "react-scroll";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "./Nav.css";

const Nav = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from("nav h1", {
      y: -100,
      duration: 1,
      opacity: 0,
    });

    tl.from(".desktopMenu li", {
      y: -50,
      stagger: 0.2,
      opacity: 0,
    });
  }, []);

  return (
    <nav>
      <h1>PORTFOLIO</h1>

      {/* Desktop Menu */}
      <ul className="desktopMenu">
        <li>
          <Link to="home" smooth duration={500} spy activeClass="active">
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth duration={500} spy activeClass="active">
            About
          </Link>
        </li>
        <li>
          <Link to="projects" smooth duration={500} spy activeClass="active">
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" smooth duration={500} spy activeClass="active">
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div
        className={`hamburger ${open ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="ham"></div>
        <div className="ham"></div>
        <div className="ham"></div>
      </div>

      {/* Mobile Menu */}
      <ul className={`mobileMenu ${open ? "active" : ""}`}>
        <li>
          <Link to="home" smooth duration={500} spy onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth duration={500} spy onClick={closeMenu}>
            About
          </Link>
        </li>
        <li>
          <Link to="projects" smooth duration={500} spy onClick={closeMenu}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" smooth duration={500} spy onClick={closeMenu}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;