//this will be a function component
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPizzaSlice} from '@fortawesome/free-solid-svg-icons';
import {NavLink} from 'react-router-dom';
//go to the website-
//react-bootstrap.github.io/components/navbar/
//npm i @types/react
const NavigationMenu=()=>{
    return(
<Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand to="/" as ={NavLink}>
            <FontAwesomeIcon
        icon={faPizzaSlice}
        rotation={270}
        className="me-2"//we are giving margin
        />
        Platter</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to="#restaurants" as={NavLink}>Restaurants</Nav.Link>
            <Nav.Link to="#about" as={NavLink}>About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};
export default NavigationMenu;