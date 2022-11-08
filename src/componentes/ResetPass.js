import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';

import Input from './Input';

function ResetPass() {
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    //const res = await axios.post('url',values);
    //console.log(res.data);
    console.log(values);
    navigate('/login');
  };

  return (
    <div className='contenedor-reset'>
      <h2>Reset Password</h2>
      <Formik
        onSubmit={onSubmit}
        initialValues={{ oldPass: '', newPass: '', email: '' }}
        validationSchema={yup.object({
          oldPass: yup.string().email().required(),
          newPass: yup.string().email().required(),
          email: yup.string().email().required(),
        })}
      >
        {({ errors, values, isValid, handleChange, handleSubmit }) => {
          return (
            <>
              <Form onSubmit={handleSubmit}>
                <Input
                  name='oldPass'
                  error={errors.oldPass}
                  value={values.oldPass}
                  placeholder='Old Password'
                  onChange={handleChange}
                />{' '}
                <Input
                  name='newPass'
                  error={errors.newPass}
                  value={values.newPass}
                  placeholder='New Password'
                  onChange={handleChange}
                />{' '}
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

export default ResetPass;
