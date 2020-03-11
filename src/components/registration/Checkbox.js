import React, { Fragment } from 'react';
import { FormGroup, Form } from 'react-bootstrap';

const Checkbox = ({ termsAccepted, setTermsAccepted }) => {
  return (
    <Fragment>
      <FormGroup className='row justify-content-center my-4'>
        <Form.Check
          custom
          id='1'
          type='checkbox'
          label='I agree to the terms and conditions'
          onClick={() => setTermsAccepted(!termsAccepted)}
        />
      </FormGroup>
    </Fragment>
  );
};

export default Checkbox;
