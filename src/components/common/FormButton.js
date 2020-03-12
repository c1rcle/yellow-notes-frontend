import React from 'react';
import { Button } from 'react-bootstrap';

const FormButton = props => {
  return (
    <Button
      variant='outline-primary'
      block
      type='submit'
      disabled={props.disabled}
    >
      <i className={`fas fa-${props.icon} mr-1`} />
      {props.title}
    </Button>
  );
};

export default FormButton;
