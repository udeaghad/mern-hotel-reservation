import React from "react";
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavBar = () => {
  
  return (
    <Navbar bg="primary" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="/">BOOooKa.com</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="text-white text-decoration-none text-center py-2 mx-2" to="/" >Home</NavLink>
            <NavLink className="text-white text-decoration-none text-center py-2 mx-2" to="/reservations">Reservations</NavLink>
            <NavLink className="text-white text-decoration-none text-center py-2 mx-2" to="/SignUp">Sign Up</NavLink>
            <NavLink className="text-white text-decoration-none text-center py-2 mx-2" to="/SignIn">Sign In</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar;