import React from 'react';
import { Button } from 'react-bootstrap';

const FormButton = props => {
  return (
    <Button
      variant='outline-primary'
      block
      type='submit'
      disabled={props.disabled}>
      <i className='fas fa-user-plus mr-1' />
      Create account
    </Button>
  );
};

export default FormButton;
