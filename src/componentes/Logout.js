import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Logout() {
  return (
    <div>
      <Button className=''>
        <Link to='/'>Logout</Link>
      </Button>
      <div>You logged in successfully!!</div>
    </div>
  );
}

export default Logout;
