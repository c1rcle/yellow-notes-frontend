import React from 'react';
import { FormGroup, Form } from 'react-bootstrap';

const Checkbox = ({ onClick }) => {
  return (
    <FormGroup className='row justify-content-center my-4'>
      <Form.Check
        custom
        id='1'
        type='checkbox'
        label='I agree to the terms and conditions'
        onClick={onClick}
      />
    </FormGroup>
  );
};

export default Checkbox;
