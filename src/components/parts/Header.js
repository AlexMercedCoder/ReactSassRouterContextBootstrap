import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer as BLink } from "react-router-bootstrap";

const Header = (props) => {
  return (
    <Navbar bg="light" expand="lg">
      <BLink to="/">
        <Navbar.Brand>AlexMercedCoder.com</Navbar.Brand>
      </BLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <BLink to="/">
            <Nav.Link>Home</Nav.Link>
          </BLink>
          <BLink to="/other">
            <Nav.Link>Other</Nav.Link>
          </BLink>
          <NavDropdown title="More" id="basic-nav-dropdown">
            <BLink to="/another">
              <NavDropdown.Item>Another</NavDropdown.Item>
            </BLink>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
