import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import '../../scss/NavBar.scss';

const HamburgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
    if (menuOpen) {
      document.body.style.marginRight = '5%';
    } else {
      document.body.style.marginRight = '5%';
    }
  };

  return (
    <Navbar expand="lg">
      <Navbar.Brand href="main">
        <h1 id="jonaseriksson">Jonas Eriksson</h1>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleMenuClick}>
        <span className={`menu-icon-bar ${menuOpen ? 'open' : ''}`} />
        <span className={`menu-icon-bar ${menuOpen ? 'open' : ''}`} />
        <span className={`menu-icon-bar ${menuOpen ? 'open' : ''}`} />
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="ml-auto" style={{ float: 'right' }}>
          <Nav.Link href="/portfolio">
            <h2>Portfolio</h2>
          </Nav.Link>
          <Nav.Link href="/cv">
            <h2>CV</h2>
          </Nav.Link>
          <Nav.Link href="/contact">
            <h2>Contact</h2>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default HamburgerMenu;
