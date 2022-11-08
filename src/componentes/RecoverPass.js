import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';

import Input from './Input';

import '../hojas-estilo/RecoverPass.css';

function RecoverPass() {
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    //const res = await axios.post('http://localhost:8080/api/auth/sign-up', values);
    //console.log(res.data);
    console.log(values);
    navigate('/reset');
  };

  return (
    <div className='contenedor-recover'>
      <h2>Recover Password</h2>
      <Formik
        onSubmit={onSubmit}
        initialValues={{ email: '' }}
        validationSchema={yup.object({
          email: yup.string().email().required(),
        })}
      >
        {({ errors, values, isValid, handleChange, handleSubmit }) => {
          return (
            <>
              <Form onSubmit={handleSubmit}>
                <Input
                  name='email'
                  error={errors.email}
                  value={values.email}
                  placeholder='Email'
                  onChange={handleChange}
                />
                <Button type='submit' disabled={!isValid}>
                  Submit
                </Button>
              </Form>
              <div>
                <Link className='link' to='/login'>
                  Back to Login
                </Link>
              </div>
            </>
          );
        }}
      </Formik>
    </div>
  );
}

export default RecoverPass;
