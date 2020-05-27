import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function DefaultLayout({ children }) {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand>PokeAPI</Navbar.Brand>
      </Navbar>
      <Container>{children}</Container>
    </>
  );
}

export default DefaultLayout;
