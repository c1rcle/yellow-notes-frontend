import React, { Fragment, useContext } from 'react';
import { FormGroup, Form } from 'react-bootstrap';
import RegistrationContext from '../../contexts/registration/RegistrationContext';

const Checkbox = () => {
  const registrationContext = useContext(RegistrationContext);
  const { termsAccepted, setTermsAccepted } = registrationContext;

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
