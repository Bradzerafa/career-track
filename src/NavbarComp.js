import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";

const NavbarComp = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Personal Track</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav " />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Link href="home">Home</Nav.Link>
          <Nav.Link href="about">About</Nav.Link>
          <Nav.Link href="contact">Contact</Nav.Link>
        </Nav>
        <Button variant="primary">Login</Button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComp;
