import React from 'react';
import { Form } from 'react-bootstrap';

function Input({ name, value, placeholder, onChange }) {
  return (
    <>
      <Form.Group>
        <Form.Control
          className='m-1 input'
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        ></Form.Control>
      </Form.Group>
    </>
  );
}

export default Input;
