import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';

function Logo() {
  const [navItem, setNavItem] = useState('login');

  return (
    <div className='w-100 border border-danger border-3'>
      <Nav className='mt-5 ms-5 mb-5 w-100'>
        <Nav.Item className='ps-5'>
          <img src={require('../assets/imagenes/ImajineOfficeLogo.png')} alt='Logo' />
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default Logo;
