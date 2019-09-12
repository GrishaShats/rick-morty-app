import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Menu:React.StatelessComponent<{}> = () => {
  return(
    <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">Rick and Morty</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/character">Characters</Nav.Link>
          <Nav.Link href="/manager">Manager</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Menu;
