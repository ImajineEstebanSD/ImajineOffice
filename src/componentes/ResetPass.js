import { React, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ResetPass() {
  const [newPass, setNewPass] = useState('');
  const [oldPass, setOldPass] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div className='contenedor-reset'>
      <h2>Reset Password</h2>
      <Form>
        <Form.Group>
          <Form.Control
            name='oldPass'
            placeholder='Old Password'
            onChange={(ev) => {
              const {
                target: { value },
              } = ev;
              setOldPass(value);
            }}
          ></Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Control
            name='newPass'
            placeholder='New Password'
            onChange={(ev) => {
              const {
                target: { value },
              } = ev;
              setNewPass(value);
            }}
          ></Form.Control>
        </Form.Group>

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
          console.log({ oldPass, newPass, email });
        }}
      >
        <Link to='/loading'>Submit</Link>
      </Button>
      <div>
        <Link className='link' to='/login'>
          Back to Login
        </Link>
      </div>
    </div>
  );
}

export default ResetPass;
