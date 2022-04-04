import logo from '../react-logo512-red.png';
import React, { useRef, useContext} from 'react';
import {Container, Nav, Navbar, NavDropdown, Form} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { NoteContext } from './NoteContext';

function NavbarComp(){

  const [noteText, setNoteText] = useContext(NoteContext);
  

  // open file:
  let handleFileOpenChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = (e) => {
      setNoteText(file);
      console.log(reader.result);
      setNoteText(reader.result);
    }
    reader.onerror = () => {
      console.log('file error', reader.error)
    }
  }
  
  // Speechsynthesis
  const syntRef = useRef(window.speechSynthesis);

  const handleBtnSpeak = () => {
    const utterance = new SpeechSynthesisUtterance(noteText);
    syntRef.current.speak(utterance);
    console.log(utterance);
  }


  return (
    <Navbar bg="dark" variant="dark" expand="sm">
      <Container>
        <Navbar.Brand as={Link} to="/" style={{color:'orange'}}>
          <img src={logo} width='36px' alt='logo' /> Speaking Markdown
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto" >
            <NavDropdown title="File" id="basic-nav-dropdown" className='linkText'>
            <Form.Group controlId="formFileMb" className="mb-3">
              <Form.Label visuallyHidden='true' >Open file</Form.Label>
              <Form.Control onChange={handleFileOpenChange} type="file" size="mb-3" />
              </Form.Group>
              <NavDropdown.Item href="#action/3.2">Save</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={handleBtnSpeak} href="#action/3.3">Speak</NavDropdown.Item>
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
