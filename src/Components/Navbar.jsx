import { Container, Nav, Navbar } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <Container className="flex">
      <Navbar bg="white" expand="lg">
        <Navbar.Brand href="#home">
          <img src="/Images/TasteBite-Logo.png" alt="logo" width={230} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home" className="navbar-links">
              HomePage
            </Nav.Link>
            <Nav.Link href="#about" className="navbar-links">
              Recipe Page
            </Nav.Link>
            <Nav.Link href="#services" className="navbar-links">
              Pages
            </Nav.Link>
            <Nav.Link href="#contact" className="navbar-links">
              Buy
            </Nav.Link>
          </Nav>
          <div className="flex-align-center">
            <FontAwesomeIcon icon={faSearch} className="text-muted" />
            <img src="/Images/account.png" alt="logo" width={50} />
          </div>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default NavBar;
