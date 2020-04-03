import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import useNotes from '../../../contexts/NotesContext';
import Note from './Note';
import useUser from '../../../contexts/UserContext';

const NoteContainer = () => {
  const [user] = useUser();
  const [{ notes }, dispatch] = useNotes();

  useEffect(() => {
    if (user.isUserLoggedIn) dispatch({ type: 'GET_NOTES' }); // eslint-disable-next-line
  }, [user.isUserLoggedIn]);

  return (
    <Row className='pb-5'>
      {!notes ||
        notes.map(note => (
          <Col lg={4} className='mt-3' key={note.noteId}>
            <Note note={note} />
          </Col>
        ))}
    </Row>
  );
};

export default NoteContainer;
