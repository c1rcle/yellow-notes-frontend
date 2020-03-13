import React from 'react';
import { Button } from 'react-bootstrap';

const FormButton = ({ disabled, icon, title }) => {
  return (
    <Button variant='outline-primary' block type='submit' disabled={disabled}>
      <i className={`fas fa-${icon} mr-1`} />
      {title}
    </Button>
  );
};

export default FormButton;
