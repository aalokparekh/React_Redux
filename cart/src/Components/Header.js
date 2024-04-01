import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Header = () => {
  return (
  <div>
  <Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
        </Nav>
        <ShoppingCartIcon style={{ fontSize: "30px", float:"right", marginRight:'15px', color:"white",cursor:'pointer' }} />
    </Container>
    
  </Navbar>
  </div>
  )
}

export default Header