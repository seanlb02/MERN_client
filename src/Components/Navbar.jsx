import React from 'react'
import {Route, BrowserRouter, Routes, Link} from 'react-router-dom'
import { Nav, Navbar, NavDropdown, Button } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";



export default function Navigator() {
  return (
    <div>
    <Navbar className="ps-3 pe-3 pb-3 pt-3 flex" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand className="text-light" as={Link} to="/">
        <div>[logo]</div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" className="bg-dark" />
      <Navbar.Collapse id="responsive-navbar-nav" className>
        <Nav className="flex ms-auto justify-content-end align-items-center">

          <Nav.Link as={Link} className="text-light" to="/about">About</Nav.Link>
          <Nav.Link ><Button className="float-start m-auto d-flex bg-dark border-0" as={Link} to="/about">Sign up</Button></Nav.Link>
          <Nav.Link ><Button className="float-start ps-12  m-auto d-flex bg-success border-0" as={Link} to="/about">Log in</Button></Nav.Link>

        </Nav>
        
      </Navbar.Collapse>
      
    </Navbar>
  


    </div>
  )
}


