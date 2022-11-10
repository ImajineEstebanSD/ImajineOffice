import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/actions';
import { useNavigate } from 'react-router-dom';

function Logo() {
  const navigate = useNavigate();

  const { isAuthenticated } = useSelector(({ auth }) => auth);

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <div className=''>
      <Nav className='m-5 d-flex justify-content-between align-items-center'>
        <Nav.Item className='ps-5'>
          <img src={require('../assets/imagenes/ImajineOfficeLogo.png')} alt='Logo' />
        </Nav.Item>
        {isAuthenticated ? (
          <Nav.Item className=''>
            <Button className='btn btn-light btn-outline-danger' onClick={handleClick}>
              Logout
            </Button>
          </Nav.Item>
        ) : null}
      </Nav>
    </div>
  );
}

export default Logo;
