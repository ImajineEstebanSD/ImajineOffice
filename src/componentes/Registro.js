import { React } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';

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

  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const res = await axios.post('http://localhost:8080/api/auth/sign-up', values);
    console.log(res.data);
    //console.log(values);
    navigate('/login');
  };

  return (
    <div className='contenedor-registro'>
      <h2>Register</h2>
      <Formik
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
            <Form onSubmit={handleSubmit}>
              <Input
                name='email'
                error={errors.email}
                value={values.email}
                placeholder='Email'
                onChange={handleChange}
              />
              <Input
                name='name'
                error={errors.name}
                value={values.name}
                placeholder='Name'
                onChange={handleChange}
              />
              <Input
                name='lastName'
                error={errors.lastName}
                value={values.lastName}
                placeholder='Last Name'
                onChange={handleChange}
              />
              <Input
                name='pass'
                error={errors.pass}
                value={values.pass}
                placeholder='Password'
                onChange={handleChange}
              />
              <Input
                name='phone'
                error={errors.phone}
                value={values.phone}
                placeholder='Phone'
                onChange={handleChange}
              />
              <Button type='submit' disabled={!isValid}>
                Submit
              </Button>
            </Form>
          );
        }}
      </Formik>

      <Link className='link' to='/login'>
        I already have an acount
      </Link>
    </div>
  );
}

export default Registro;
