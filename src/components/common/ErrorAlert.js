import React from 'react';
import { Alert } from 'react-bootstrap';
import useUser from '../../contexts/UserContext';

const ErrorAlert = props => {
  const [user, dispatch] = useUser();

  if (user.error) {
    setTimeout(() => dispatch({ type: 'CLEAR_ERROR' }), 5000);
    return (
      <Alert variant='danger' className='mt-3 mb-0'>
        <strong>We have encountered an error!</strong> {user.error.message}
      </Alert>
    );
  }
  return null;
};

export default ErrorAlert;
