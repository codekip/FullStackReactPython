import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const Header = ({ title }) => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="/">{title}</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
