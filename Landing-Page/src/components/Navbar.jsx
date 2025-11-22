import React, { useEffect, useState } from "react";
import "../css/Navbar.css";
import { Navbar, Nav, Container } from "react-bootstrap";

const NavbarComponent = () => {
  return <NavbarSection />;
};

export default NavbarComponent;

const NavbarSection = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // close mobile menu on resize up to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Navbar
      expand="lg"
      className={`navbar navbar-dark nav__bar ${
        isSticky ? "navbar--sticky" : ""
      }`}
    >
      <Container className="nav__section">
        <Logo />
        <NavLinks isOpen={isMenuOpen} />
        <NavbarHamburger
          isOpen={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        />
      </Container>
    </Navbar>
  );
};

// Logo Component
const Logo = () => {
  return (
    <Navbar.Brand href="#" className="logo__img-container">
      <img src="/images/logos/Logo2.webp" alt="Logo" className="logo__img" />
    </Navbar.Brand>
  );
};

// Nav links
const NavLinks = ({ isOpen }) => {
  return (
    <Nav className={`nav__links ${isOpen ? "nav__links--open" : ""}`}>
      <Nav.Link className="nav__link" href="#home">
        <span>Home</span>
      </Nav.Link>
      <Nav.Link className="nav__link" href="#how-it-works">
        <span>How it works</span>
      </Nav.Link>
      <Nav.Link className="nav__link" href="#about">
        <span>About us</span>
      </Nav.Link>
      <Nav.Link className="nav__link" href="#FAQs">
        <span>FAQs</span>
      </Nav.Link>
      <Nav.Link className="nav__link" href="#form-section">
        <span>Contact us</span>
      </Nav.Link>
    </Nav>
  );
};

// Navbar Hamburger
const NavbarHamburger = ({ isOpen, onClick }) => {
  return (
    <div className={`menu ${isOpen ? "menu--open" : ""}`} onClick={onClick}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};
