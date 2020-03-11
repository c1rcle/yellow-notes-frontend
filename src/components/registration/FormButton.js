import React, { Fragment, useContext } from 'react';
import { Button } from 'react-bootstrap';
import RegistrationContext from '../../contexts/registration/RegistrationContext';

const FormButton = () => {
  const registrationContext = useContext(RegistrationContext);
  const { termsAccepted } = registrationContext;

  return (
    <Fragment>
      <Button
        variant='outline-primary'
        block
        type='submit'
        disabled={!termsAccepted}>
        <i className='fas fa-user-plus mr-1' />
        Create account
      </Button>
    </Fragment>
  );
};

export default FormButton;
