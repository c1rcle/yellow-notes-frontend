import React from 'react';
import { Button } from 'react-bootstrap';
import Spinner from '../Spinner';

const FormButton = ({ disabled, icon, title, isLoading }) => {
  return (
    <Button variant='outline-primary' block type='submit' disabled={disabled || isLoading}>
      {isLoading ? (
        <>
          <Spinner />{' '}
        </>
      ) : (
        <i className={`fas fa-${icon} mr-1`} />
      )}
      {title}
    </Button>
  );
};

export default FormButton;
