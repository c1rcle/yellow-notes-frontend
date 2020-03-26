import React from 'react';
import { Spinner as SpinnerBootstrap } from 'react-bootstrap';

const Spinner = () => {
  return (
    <SpinnerBootstrap animation='border' role='status' size='sm'>
      <span className='sr-only'>Loading...</span>
    </SpinnerBootstrap>
  );
};

export default Spinner;
