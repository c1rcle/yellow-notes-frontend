import React from 'react';
import { Badge } from 'react-bootstrap';
import Spinner from '../../common/Spinner';
import useNotes from '../../../contexts/NotesContext';

const NoteLoader = () => {
  const [{ isLoading }] = useNotes();

  return (
    isLoading && (
      <div className='d-flex flex-column align-items-center'>
        <Spinner size='xl' className='my-2' variant='primary' />
        <Badge pill variant='primary'>
          Loading your notes...
        </Badge>
      </div>
    )
  );
};

export default NoteLoader;
