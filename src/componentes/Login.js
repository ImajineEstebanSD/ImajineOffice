import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';

import { useSelector, useDispatch } from 'react-redux';
import { flow } from '../redux/actions';

import Input from './Input';
import Logged from './Logged';

function Login() {
  const valores = {
    email: '',
    password: '',
  };

  const { token, user, isAuthenticated } = useSelector(({ auth }) => auth);

  const dispatch = useDispatch();
  const handleClik = () => {
    dispatch(flow());
  };
  /*
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
    //    if (res.data) {
    //  navigate('/logged');
    //}
  };

  useEffect(() => {
    async function buscarMe() {
      try {
        const {
          data: { data: user },
        } = await axios.get('http://localhost:8080/api/auth/me', {
          headers: { jwt: token },
        });
        setUser(user);
      } catch (error) {
        console.error(error);
      }
    }
    buscarMe();
  }, [token]);
*/
  return (
    <div className='d-flex justify-content-center mt-5 pt-5'>
      <div className='d-flex flex-column justify-content-center w-50'>
        <div className='d-flex flex-column justify-content-center ms-5 ps-5 w-75'>
          {token ? (
            <Logged />
          ) : (
            <div>
              <h4>Login</h4>
              <Formik
                //onSubmit={onSubmit}
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
              <Button onClick={handleClik}>Redux Submit</Button>
            </div>
          )}
        </div>
        <div className='d-flex flex-column justify-content-center align-items-center ms-5 mt-5 ps-5 w-75'>
          <h4>My Profile</h4>
          {isAuthenticated ? (
            <div>
              <p>{user.name}</p>
              <p>{user.lastName}</p>
              <p>{user.email}</p>
              <p>{user.phone}</p>
            </div>
          ) : (
            <div>Debe ser un usuario logeado</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
