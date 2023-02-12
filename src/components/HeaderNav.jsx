import React from 'react'
import { Button, Form } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BsFillMicFill } from 'react-icons/bs';
import {BiVideoPlus} from 'react-icons/bi';
import {IoMdNotificationsOutline} from 'react-icons/io';
const headerNav = () => {
  return (
    <div>
        <Navbar  bg="light" expand="lg">
      <Container  fluid> 
        <Navbar.Brand href="#"><img height="120px" width="auto" src="https://www.logo.wine/a/logo/YouTube/YouTube-Logo.wine.svg" alt="logoyoutube" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px',display:"flex", justifyContent:"space-around", width:"100%"}}  
            navbarScroll>
              <div  style={{display:"flex"}}        >
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
            <Nav.Link href="#action1"><BsFillMicFill/></Nav.Link>
            
            <Nav.Link href="#action2"><BiVideoPlus/></Nav.Link>
            <Nav.Link href="#" disabled>
            <IoMdNotificationsOutline/> 
            
            </Nav.Link>
            </div>
            <div  style={{display:"flex"}}  >
            <NavDropdown title="Profile" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Your channel</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Youtube Studio
              </NavDropdown.Item>
              
              <NavDropdown.Item href="#action5">
                Sign out 
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action6">Purchases and memberships</NavDropdown.Item>
              <NavDropdown.Item href="#action7">Your data in Youtube</NavDropdown.Item>
              <NavDropdown.Item href="#action8">Settings</NavDropdown.Item>
              <NavDropdown.Item href="#action8">History</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action10">Something else here</NavDropdown.Item>
            </NavDropdown>
            </div>
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default headerNav