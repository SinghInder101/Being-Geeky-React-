import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavDropdown,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'react-bootstrap';
import './header.css';

const header = () => {
    return (
        <div className="header ht" >
           <Navbar bg="dark" expand="lg" variant="dark">
  
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#one">Being Geeky</Nav.Link>
      <Nav.Link href="#two">Tutorial</Nav.Link>
      <Nav.Link href="#three">Video</Nav.Link>
      <Nav.Link href="#four">Coupon</Nav.Link>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>


        </div>
    );
}

export default header;