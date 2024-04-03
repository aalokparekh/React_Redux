import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Menu } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
          <ShoppingCartIcon style={{ fontSize: "30px", float: "right", marginRight: '15px', color: "white", cursor: 'pointer' }}  id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}/>
        </Container>

        <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
      <div style={{position:'relative'}}>
      <i className='fas fa-close smallclose'  style={{position:'absolute'}} onClick={handleClose}></i>
      <p>Cart is Empty </p><img src='https://miro.medium.com/v2/resize:fit:1100/1*D-ZiKd0B00tdifaB2X3tKQ.gif' style={{width:'100px',padding:'10px'}}></img>
      </div>
      </Menu>
      </Navbar>
    </div>
  )
}

export default Header