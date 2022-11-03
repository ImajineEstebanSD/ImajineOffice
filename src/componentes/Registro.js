import { React, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';

import Input from './Input';

import '../hojas-estilo/Registro.css';

function Registro() {
  const valores = {
    email: '',
    name: '',
    lastName: '',
    pass: '',
    phone: '',
  };

  return (
    <div className='contenedor-registro'>
      <h2>Register</h2>
      <Formik initialValues={{ ...valores }}>
        {({ values, isValid, handleChange }) => {
          return (
            <Form>
              <Input
                name='email'
                value={values.email}
                placeholder='Email'
                onChange={handleChange}
              />
              <Input name='name' value={values.name} placeholder='Name' onChange={handleChange} />
              <Input
                name='lastName'
                value={values.lastName}
                placeholder='Last Name'
                onChange={handleChange}
              />
              <Input
                name='pass'
                value={values.pass}
                placeholder='Password'
                onChange={handleChange}
              />
              <Input
                name='phone'
                value={values.phone}
                placeholder='Phone'
                onChange={handleChange}
              />
              <Button
                type='submit'
                disabled={!isValid}
                onClick={() => {
                  console.log({ values });
                }}
              >
                Submit
              </Button>
            </Form>
          );
        }}
      </Formik>

      <div>
        <Link className='link' to='/login'>
          I already have an acount
        </Link>
      </div>
    </div>
  );
}

export default Registro;
