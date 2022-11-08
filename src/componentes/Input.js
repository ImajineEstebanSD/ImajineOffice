import React from 'react';
import { Form } from 'react-bootstrap';

function Input({ name, error, value, placeholder, onChange, ...rest }) {
  return (
    <>
      <Form.Group>
        <Form.Control
          className='m-1 input'
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          {...rest}
        ></Form.Control>

        <Form.Text className='text-danger'>{error && <p className='m-2'>{error}</p>}</Form.Text>
      </Form.Group>
    </>
  );
}

export default Input;
