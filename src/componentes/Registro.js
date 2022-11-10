import { React } from 'react';
import { Button, Form, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';

import { useSelector, useDispatch } from 'react-redux';
import { flow } from '../redux/actions';

import Input from './Input';
import Loading from './Loading';

function Registro() {
  const valores = {
    email: '',
    name: '',
    lastName: '',
    pass: '',
    phone: '',
  };

  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const res = await axios.post('http://localhost:8080/api/auth/sign-up', values);
    console.log(res.data);
    //console.log(values);
    navigate('/login');
  };
  /*
  //Consume
  const { isAuthenticated, loading } = useSelector(({ auth }) => auth);
  console.log({ isAuthenticated, loading });

  //Trigger
  const desp = useDispatch();

  const handleDisp = () => {
    desp(flow());
  };

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  <Row className='mt-5 w-50 d-flex justify-content-center align-items-center'>
      <Button onClick={handleDisp}>{!isAuthenticated ? 'Logout' : 'You can not logout'}</Button>
  </Row>
  */
  return (
    <div className='d-flex justify-content-center p-5'>
      <div className='d-flex justify-content-center w-50'>
        <div className='d-flex flex-column justify-content-center aling-items-center w-75'>
          <h5 className=''>Register</h5>
          <Formik
            className='m-1 d-flex flex-column justify-content-center align-items-center'
            onSubmit={onSubmit}
            initialValues={{ ...valores }}
            validationSchema={yup.object({
              email: yup
                .string('must be a string')
                .email('enter a valid email')
                .required('this field is required'),
              name: yup
                .string()
                .matches(/[^$&+,:;=?@#|'<>.^*()%!-\s]/, 'Is not in correct format')
                .required(),
              lastName: yup
                .string()
                .matches(/[^$&+,:;=?@#|'<>.^*()%!-\s]/, 'Is not in correct format')
                .required(),
              pass: yup.string().required(),
              phone: yup.number().min(8).required(),
            })}
          >
            {({ errors, values, isValid, handleChange, handleSubmit }) => {
              return (
                <Form className='d-flex flex-column justify-content-center' onSubmit={handleSubmit}>
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
                    name='name'
                    error={errors.name}
                    value={values.name}
                    placeholder='Name'
                    onChange={handleChange}
                  />
                  <Input
                    className='m-1'
                    name='lastName'
                    error={errors.lastName}
                    value={values.lastName}
                    placeholder='Last Name'
                    onChange={handleChange}
                  />
                  <Input
                    className='m-1'
                    name='pass'
                    error={errors.pass}
                    value={values.pass}
                    placeholder='Password'
                    onChange={handleChange}
                  />
                  <Input
                    className='m-1'
                    name='phone'
                    error={errors.phone}
                    value={values.phone}
                    placeholder='Phone'
                    onChange={handleChange}
                  />
                  <Link className='mt-3 d-flex justify-content-center' to='/login'>
                    I already have an acount
                  </Link>
                  <Button
                    className='mt-2 d-flex justify-content-center'
                    type='submit'
                    disabled={!isValid}
                  >
                    Submit
                  </Button>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default Registro;
