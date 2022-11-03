import { React, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../hojas-estilo/RecoverPass.css';

function RecoverPass() {
  const [email, setEmail] = useState('');

  return (
    <div className='contenedor-recover'>
      <h2>Recover Password</h2>
      <Form>
        <Form.Group>
          <Form.Control
            name='email'
            placeholder='Email'
            onChange={(ev) => {
              const {
                target: { value },
              } = ev;
              setEmail(value);
            }}
          ></Form.Control>
        </Form.Group>
      </Form>

      <Button
        onClick={() => {
          console.log({ email });
        }}
      >
        <Link to='/reset'>Submit</Link>
      </Button>

      <div>
        <Link className='link' to='/login'>
          Back to Login
        </Link>
      </div>
    </div>
  );
}

export default RecoverPass;
