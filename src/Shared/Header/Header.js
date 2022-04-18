import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';


const Header = () => {
    return (
        
            <>
  <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" sticky="top">
  <Container>
  <Navbar.Brand href="#home">
  
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link eventKey={2} href="/">Mr.Doctor</Nav.Link>
      <Nav.Link href="/#services">Our Service</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link eventKey={2} href="#about">About</Nav.Link>
      <Nav.Link eventKey={2} href="#signup">Signup</Nav.Link>
      <Nav.Link eventKey={2} href="#login">
        Login
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  
</>
        
    );
};

export default Header;