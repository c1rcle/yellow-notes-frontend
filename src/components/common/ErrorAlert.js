import React, { useEffect, useRef } from 'react';
import useUser from '../../contexts/UserContext';
import useNotes from '../../contexts/NotesContext';
import { useAlert } from 'react-alert';

const ErrorAlert = () => {
  const alert = useAlert();
  const [user, dispatchUser] = useUser();
  const [notes, dispatchNotes] = useNotes();

  const isFirstRun = useRef(true);

  useEffect(() => {
    if (isFirstRun.current) isFirstRun.current = false;
    else {
      if (user.error) {
        setTimeout(() => dispatchUser({ type: 'CLEAR_ERROR' }), 3000);
        alert.error(user.error.message);
      }

      if (notes.error) {
        setTimeout(() => dispatchNotes({ type: 'CLEAR_ERROR' }), 3000);
        alert.error(notes.error.message);
      }
    }
  }, [user, notes, alert, dispatchUser, dispatchNotes]);

  // if (user.error) {
  //   // setTimeout(() => dispatch({ type: 'CLEAR_ERROR' }), 5000);
  //   // return (
  //   //   <Alert variant='primary' className='mt-3 mb-0'>
  //   //     <strong>We have encountered an error!</strong> {user.error.message}
  //   //   </Alert>
  //   // );
  //   alert.show(user.error.message);
  // }
  return <></>;
};

export default ErrorAlert;
