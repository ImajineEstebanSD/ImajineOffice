import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';

import Input from './Input';
import Logged from './Logged';

import '../hojas-estilo/Login.css';

function Login() {
  const valores = {
    email: '',
    password: '',
  };

  const [logged, setLogged] = useState(false);
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const {
      data: {
        data: { token },
      },
    } = await axios.post('http://localhost:8080/api/auth/sign-in', values);

    setToken(token);
    //console.log(token);
    /*    if (res.data) {
      navigate('/logged');
    }*/
  };
  async function buscarMe() {
    try {
      const { data: user } = await axios.get('http://localhost:8080/api/auth/me', {
        headers: { jwt: token },
      });

      setUser(user);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <>
      {logged ? ( //Deberia usar useEffect
        <Logged />
      ) : (
        <div className='contenedor-login'>
          <h2>Login</h2>
          <Formik
            onSubmit={onSubmit}
            initialValues={{ ...valores }}
            validationSchema={yup.object({
              email: yup.string().email().required(),
              password: yup.string().min(8).required(),
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
                    <Input
                      name='password'
                      error={errors.password}
                      value={values.password}
                      placeholder='Password'
                      onChange={handleChange}
                    />
                    <Button type='submit' disabled={!isValid}>
                      Submit
                    </Button>
                  </Form>

                  <div>
                    <Link className='link' to='/recover'>
                      Forgot my password
                    </Link>
                  </div>
                  <div>
                    <Link className='link' to='/'>
                      Go back
                    </Link>
                  </div>
                </>
              );
            }}
          </Formik>
        </div>
      )}
      <div>
        <Button onClick={buscarMe}>My Profile</Button>
        {user ? ( //Deberia usar useEffect?
          <div>{/*Mostrar de alguna forma*/ console.log(user)}</div>
        ) : (
          <div>Debe ser un usuario logeado</div>
        )}
      </div>
    </>
  );
}

export default Login;
