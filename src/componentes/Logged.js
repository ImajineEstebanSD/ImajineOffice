import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Logout() {
  const navigate = useNavigate();

  return (
    <div>
      <Button
        className=''
        onClick={(e) => {
          e.preventDefault();
          navigate('/login');
        }}
      >
        Logout
      </Button>
      <div>You logged in successfully!!</div>
    </div>
  );
}

export default Logout;
