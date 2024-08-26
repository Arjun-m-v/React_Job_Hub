import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Nav, Navbar, Container, NavDropdown} from 'react-bootstrap';  

function Header() {
  return (
    <>
      <Navbar className='border dark shadow'  style={{ backgroundColor: '#FFFFFF' }} expand="md">  
        <Container> 
          <div style={{padding:"15px"}}>
            <img src="https://cdn.pixabay.com/photo/2024/02/10/11/17/sun-8564595_640.png" width={'50px'} height={'50px'}alt="" />
          </div>
          <Navbar.Brand href="" style={{fontFamily:"cursive",fontSize:"25px"}}>AMV SOLUTIONS</Navbar.Brand>  
          <Navbar.Toggle aria-controls="basic-navbar-nav" />  
          <Navbar.Collapse id="basic-navbar-nav">  
            {/* <Nav className="me-auto">  
              <Nav.Link href="#home">Home</Nav.Link>  
              <Nav.Link href="#link">Link</Nav.Link>  
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">  
                <NavDropdown.Item href="#action/3.1">Dropdown Item 1</NavDropdown.Item>  
                <NavDropdown.Item href="#action/3.2">Dropdown Item 2</NavDropdown.Item>  
                <NavDropdown.Item href="#action/3.3">Dropdown Item 3</NavDropdown.Item>  
                <NavDropdown.Divider />  
                <NavDropdown.Item href="#action/3.4">Another Item</NavDropdown.Item>  
              </NavDropdown>  
            </Nav>   */}
          </Navbar.Collapse>  
        </Container>  
      </Navbar> 
    </>
  )
}

export default Header
