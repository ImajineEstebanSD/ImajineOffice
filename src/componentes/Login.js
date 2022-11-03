import { React, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../hojas-estilo/Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  return (
    <div className='contenedor-login'>
      <h2>Login</h2>
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
        <Form.Group>
          <Form.Control
            name='name'
            placeholder='Name'
            onChange={(ev) => {
              const {
                target: { value },
              } = ev;
              setName(value);
            }}
          ></Form.Control>
        </Form.Group>
      </Form>

      <Button
        onClick={() => {
          console.log({ email, name });
        }}
      >
        Submit
      </Button>

      <div>
        <Link className='link' to='/recover'>
          Forgot my password
        </Link>
      </div>
    </div>
  );
}

export default Login;
