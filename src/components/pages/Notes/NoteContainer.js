import React, { useEffect } from 'react';
import { Col } from 'react-bootstrap';
import Masonry from 'react-masonry-component';
import useUser from '../../../contexts/UserContext';
import useNotes from '../../../contexts/NotesContext';
import Note from './Note';
import EmptyContainer from './EmptyContainer';

const NoteContainer = () => {
  const [user] = useUser();
  const [{ notes }, dispatch] = useNotes();

  useEffect(() => {
    if (user.isUserLoggedIn)
      dispatch({ type: 'GET_NOTES', payload: { takeCount: 100, skipCount: 0 } }); // eslint-disable-next-line
  }, [user.isUserLoggedIn]);

  return (
    <>
    {notes.length === 0 && <EmptyContainer />}
      <Masonry enableResizableChildren={true} className='pb-3'>
        {notes &&
          notes.map(note => (
            <Col lg={4} className='mt-3' key={note.noteId}>
              <Note note={note} />
            </Col>
          ))}
      </Masonry>
    </>
  );
};

export default NoteContainer;
