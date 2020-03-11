import React, { Fragment } from 'react';
import { Button } from 'react-bootstrap';

const FormButton = ({ termsAccepted }) => {
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
