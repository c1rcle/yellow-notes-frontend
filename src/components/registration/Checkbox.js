import React, { useContext } from 'react';
import { FormGroup, Form } from 'react-bootstrap';
import RegistrationContext from '../../contexts/Registration';

const Checkbox = () => {
  const { termsAccepted, setTermsAccepted } = useContext(RegistrationContext);

  return (
    <>
      <FormGroup className='row justify-content-center my-4'>
        <Form.Check
          custom
          id='1'
          type='checkbox'
          label='I agree to the terms and conditions'
          onClick={() => setTermsAccepted(!termsAccepted)}
        />
      </FormGroup>
    </>
  );
};

export default Checkbox;
