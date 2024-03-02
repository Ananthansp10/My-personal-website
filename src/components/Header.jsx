import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

function Header() {
  return (
    <div>
      <Navbar expand="lg" className='bg-black' data-bs-theme="dark" style={{position:'fixed',width:'100%',zIndex:'1'}}>
        <Container>
          <Navbar.Brand href="#home">Ananthan <span className='bg-red'>SP</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#banner"><span className='colour-white'>Home</span></Nav.Link>
              <Nav.Link href="#about" ><span className='colour-white'>About</span></Nav.Link>
              <Nav.Link href="#skills" ><span className='colour-white'>Skills</span></Nav.Link>
              <Nav.Link href="#service" ><span className='colour-white'>Service</span></Nav.Link>
              <Nav.Link href="#contact-us" ><span className='colour-white'>Contact Us</span></Nav.Link>
              <Nav.Link href="#pricing" ><span className='colour-white'>Projects</span></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
