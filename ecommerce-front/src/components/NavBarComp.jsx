import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import user from './user.png';
import cart from './herramienta.png';
import './NavBarComp.css';

export default class NavBarComp extends Component {
    render() {
        return (
            <Navbar bg="info" expand="lg">
            <Container>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    
    <Navbar.Brand>Proyecto Vacaciones</Navbar.Brand>
    <Navbar.Brand>
      <img
        src={cart}
        width="30"
        height="30"
        className="d-inline-block align-top icon1"
        alt="cart logo"
      />
      <img
        src= {user}
        width="30"
        height="30"
        className="d-inline-block align-top icon2"
        alt="cart logo"
      />
    </Navbar.Brand>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        )
    }
}

