import { React } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import * as yup from 'yup';

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
      <Formik
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
          phone: yup.number().min(5).required(),
        })}
      >
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
