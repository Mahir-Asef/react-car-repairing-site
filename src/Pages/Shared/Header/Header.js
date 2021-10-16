import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    const {user,logOut,signInUsingGoogle}=useAuth();
    return (
        <>
  <Navbar bg="dark" variant="dark" sticky="top" >
    <Container>
    <Navbar.Brand href="#home">Genius Car Mechanics</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
    <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
      <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
      <Nav.Link as={HashLink} to="/home#experts">Experts</Nav.Link> 
      { user?.email ?
          <Button onClick={logOut} variant="outline-light">Logout</Button>
            :
            <Button onClick={signInUsingGoogle} variant="outline-light">Login</Button>
        }
      <Navbar.Text>
        Signed in as: <a href="#login">{user?.displayName}</a>
      </Navbar.Text>
    </Navbar.Collapse>
    </Container>
  </Navbar>
</>
    );
};

export default Header;