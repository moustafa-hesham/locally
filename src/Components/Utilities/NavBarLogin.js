import React from 'react';
import { Container, FormControl, Nav, Navbar } from 'react-bootstrap';
import logo from '../../images/local.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faUserAlt } from '@fortawesome/free-solid-svg-icons';

export default function NavBarLogin() {
  return (
    <Navbar className="sticky-top" bg="dark" variant="dark" expand="sm">
      <Container>
        <Navbar.Brand>
          <a href="/">
            <img src={logo} alt="logo" className="logo" />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <FormControl
            type="search"
            placeholder="Search here.."
            className="me-2 w-100"
            aria-label="Search"
          />
          <Nav className="me-auto">
            <Nav.Link
              href="/login"
              className="nav-text d-flex mt-3 justify-content-center"
            >
              <FontAwesomeIcon
                icon={faUserAlt}
                className="login-img px-2"
                style={{ color: 'white' }}
              />

              <p style={{ color: 'white' }}>Login</p>
            </Nav.Link>
            <Nav.Link
              href="/cart"
              className="nav-text d-flex mt-3 justify-content-center"
              style={{ color: 'white' }}
            >
              <FontAwesomeIcon
                icon={faCartShopping}
                className="login-img px-2"
                style={{ color: 'white' }}
              />
              <p style={{ color: 'white' }}>Cart</p>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
