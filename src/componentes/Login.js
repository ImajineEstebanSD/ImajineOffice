import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import * as yup from 'yup';

import { useDispatch } from 'react-redux';
import { login } from '../redux/actions';
import Input from './Input';

function Login() {
  const valores = {
    email: '',
    password: '',
  };

  const dispatch = useDispatch();

  const onSubmitFlow = async (values) => {
    dispatch(login(values));
  };

  return (
    <div className='d-flex justify-content-center mt-5 pt-5'>
      <div className='d-flex flex-column justify-content-center w-50'>
        <div className='d-flex flex-column justify-content-center ms-5 ps-5 w-75'>
          <div>
            <h4>Login</h4>
            <Formik
              onSubmit={onSubmitFlow}
              initialValues={{ ...valores }}
              validationSchema={yup.object({
                email: yup.string().email().required(),
                password: yup.string().min(8).required(),
              })}
            >
              {({ errors, values, isValid, handleChange, handleSubmit }) => {
                return (
                  <>
                    <Form
                      className='d-flex flex-column justify-content-center'
                      onSubmit={handleSubmit}
                    >
                      <Input
                        className='m-1'
                        name='email'
                        error={errors.email}
                        value={values.email}
                        placeholder='Email'
                        onChange={handleChange}
                      />
                      <Input
                        className='m-1'
                        type='password'
                        name='password'
                        error={errors.password}
                        value={values.password}
                        placeholder='Password'
                        onChange={handleChange}
                      />
                      <div className='mt-3 mb-3 d-flex flex-column justify-content-center'>
                        <Link className='d-flex justify-content-center' to='/recover'>
                          Forgot my password
                        </Link>
                        <Link className='d-flex justify-content-center' to='/'>
                          Go back
                        </Link>
                      </div>
                      <Button
                        className='mt-2 d-flex justify-content-center'
                        type='submit'
                        disabled={!isValid}
                      >
                        Submit
                      </Button>
                    </Form>
                  </>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
