import React from "react";
import "../css/Navbar.css";
import { Navbar, Nav, Container } from "react-bootstrap";

const NavbarComponent = () => {
  return <NavbarSection />;
};

export default NavbarComponent;

const NavbarSection = () => {
  return (
    <Navbar expand="lg" sticky="top" className="navbar navbar-dark .nav__bar">
      <Container className="nav__section">
        <Logo />
        <NavLinks />
      </Container>
    </Navbar>
  );
};

// Logo Component
const Logo = () => {
  return (
    <Navbar.Brand href="#home" className="logo__img-container">
      <img
        src="/images/logos/help4landlordslogo.webp"
        alt="Logo"
        className="logo__img"
      />
    </Navbar.Brand>
  );
};

// Nav links
const NavLinks = () => {
  return (
    <Nav className="nav__links">
      <Nav.Link className="nav__link" href="#">
        <span>Home</span>
      </Nav.Link>
      <Nav.Link className="nav__link" href="#About us">
        <span>About us</span>
      </Nav.Link>
      <Nav.Link className="nav__link" href="#How-it-works">
        <span>How it works</span>
      </Nav.Link>
      <Nav.Link className="nav__link" href="#Contact-us">
        <span>Contact us</span>
      </Nav.Link>
    </Nav>
  );
};

// const NavbarComponent = () => {
//   return (
//     <Navbar expand="lg" sticky="top" className="navbar navbar-dark">
//       <Container className="nav__section">
//         {/* Logo */}
//         {/* <Logo />*/}
//         {/* Navbar toggle for mobile */}
//         {/* <Navbar.Toggle
//           aria-controls="main-nav"
//           className="navbar-toggler"
//           data-bs-toggle="collapse"
//           data-bs-target="#main-nav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         />*/}

//         {/* Navbar links */}
//         <Navbar.Collapse>
//           <Nav className="ml-auto nav__section">
//             <Logo />
//             <NavLinks />
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };
