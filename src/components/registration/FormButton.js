import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import RegistrationContext from '../../contexts/Registration';

const FormButton = () => {
  const { termsAccepted } = useContext(RegistrationContext);

  return (
    <>
      <Button
        variant='outline-primary'
        block
        type='submit'
        disabled={!termsAccepted}>
        <i className='fas fa-user-plus mr-1' />
        Create account
      </Button>
    </>
  );
};

export default FormButton;
