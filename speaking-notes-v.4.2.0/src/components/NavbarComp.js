import logo from '../logo.svg';
import React from 'react';
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function NavbarComp(){
  const handleOpen = (e) => {
    alert('open what?');
  }
    
  return (
    <Navbar bg="dark" variant="dark" expand="sm">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} width='40px' alt='logo' /> Speaking Markdown
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto" >
            <NavDropdown title="File" id="basic-nav-dropdown" className='linkText'>
              <NavDropdown.Item onClick={handleOpen} href="#action/3.1">Open</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Save</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">Speak</NavDropdown.Item>
            </NavDropdown>
                <Nav.Link as={Link} to="/" className='linkText'>Editor</Nav.Link> 
                <Nav.Link as={Link} to="/preview" className='linkText'>Preview</Nav.Link> 
                <Nav.Link as={Link} to="/help" className='linkText'>Help</Nav.Link> 
           </Nav>
          </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}

export default NavbarComp;
