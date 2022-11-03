import { React, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../hojas-estilo/Registro.css';

function Registro() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [pass, setPass] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <div className='contenedor-registro'>
      <h2>Register</h2>
      <Form>
        <Form.Group className='grupo'>
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
        <Form.Group className='grupo'>
          <Form.Control
            name='nombre'
            placeholder='Name'
            onChange={(ev) => {
              const {
                target: { value },
              } = ev;
              setName(value);
            }}
          ></Form.Control>
        </Form.Group>
        <Form.Group className='grupo'>
          <Form.Control
            name='Apellido'
            placeholder='Last Name'
            onChange={(ev) => {
              const {
                target: { value },
              } = ev;
              setLastName(value);
            }}
          ></Form.Control>
        </Form.Group>
        <Form.Group className='grupo'>
          <Form.Control
            name='Password'
            placeholder='Password'
            onChange={(ev) => {
              const {
                target: { value },
              } = ev;
              setPass(value);
            }}
          ></Form.Control>
        </Form.Group>
        <Form.Group className='grupo'>
          <Form.Control
            name='Telefono'
            placeholder='Phone Number'
            onChange={(ev) => {
              const {
                target: { value },
              } = ev;
              setPhone(value);
            }}
          ></Form.Control>
        </Form.Group>
      </Form>

      <Button
        className='btn'
        onClick={() => {
          console.log({ email, name, lastName, pass, phone });
        }}
      >
        Submit
      </Button>

      <div>
        <Link className='link' to='/login'>
          I already have an acount
        </Link>
      </div>
    </div>
  );
}

export default Registro;
