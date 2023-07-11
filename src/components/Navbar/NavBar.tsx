import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../scss/NavBar.scss';

type HamburgerMenuProps = {
  onContactClick: () => void;
};

const HamburgerMenu = ({ onContactClick }: HamburgerMenuProps) => {
  const [expanded, setExpanded] = useState(false);

  const toggleNav = () => {
    setExpanded(!expanded);
  };

  const closeNav = () => {
    setExpanded(false);
  };

  const handleContactClick = () => {
    onContactClick();
    closeNav();
  };

  return (
    <div>
      <Navbar expanded={expanded} expand="lg">
        <Navbar.Brand as={Link} to="/">
          <h1 id="jonaseriksson">Jonas Eriksson</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleNav}>
          <span className={`menu-icon-bar ${expanded ? 'open' : ''}`} />
          <span className={`menu-icon-bar ${expanded ? 'open' : ''}`} />
          <span className={`menu-icon-bar ${expanded ? 'open' : ''}`} />
        </Navbar.Toggle>
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className=" justify-content-end"
        >
          <Nav className="ml-auto" style={{ float: 'right' }}>
            <Nav.Link as={Link} to="/portfolio" onClick={closeNav}>
              <h2>Portfolio</h2>
            </Nav.Link>
            <Nav.Link as={Link} to="/about" onClick={closeNav}>
              <h2>About</h2>
            </Nav.Link>
            <Nav.Link onClick={handleContactClick}>
              <h2>Contact</h2>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default HamburgerMenu;
