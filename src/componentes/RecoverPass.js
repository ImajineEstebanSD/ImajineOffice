import React from 'react';
import { Button, Form, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import * as yup from 'yup';

import Input from './Input';

function RecoverPass() {
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    //const res = await axios.post('http://localhost:8080/api/auth/sign-up', values);
    //console.log(res.data);
    console.log(values);
    navigate('/reset');
  };

  return (
    <Row className='justify-content-center'>
      <div className='w-25 align-items-center'>
        <h5>Recover Password</h5>
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
                <Form className='d-flex flex-column justify-content-center' onSubmit={handleSubmit}>
                  <Input
                    name='email'
                    error={errors.email}
                    value={values.email}
                    placeholder='Email'
                    onChange={handleChange}
                  />

                  <Link className='mt-3 mb-2 d-flex justify-content-center' to='/login'>
                    Back to Login
                  </Link>

                  <Button type='submit' disabled={!isValid}>
                    Submit
                  </Button>
                </Form>
              </>
            );
          }}
        </Formik>
      </div>
    </Row>
  );
}

export default RecoverPass;
