import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { ReactComponent as Logo } from '../images/logo.svg';

const navbarStyle = {
  backgroundColor: '#eee',
};

const Header = ({ title }) => {
  return (
    <Navbar style={navbarStyle}>
      <Container>
        <Logo alt={title} style={{ maxWidth: '20rem', maxHeight: '3rem' }} />
      </Container>
    </Navbar>
  );
};

export default Header;
