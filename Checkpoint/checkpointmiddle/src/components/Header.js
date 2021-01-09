import React from 'react';
import { Navbar, NavbarBrand, Nav, Button } from 'reactstrap';

const Header = () => {
  return (
    <div>
      <Navbar color='light' light expand='md'>
        <NavbarBrand href='/'>HOME Music</NavbarBrand>
        <Nav className='mr-auto' navbar></Nav>
        <Button color='primary' href='/'>
          Add new song
        </Button>
      </Navbar>
    </div>
  );
};

export default Header;
