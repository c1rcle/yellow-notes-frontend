import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import useNotes from '../../../contexts/NotesContext';
import Note from './Note';
import useUser from '../../../contexts/UserContext';

const NoteContainer = () => {
  const [user] = useUser();
  const [{ notes, loadedCount, serverCount }, dispatch] = useNotes();

  useEffect(() => {
    if (user.isUserLoggedIn) {
      window.addEventListener('scroll', onScroll);
      dispatch({ type: 'GET_NOTES', payload: { takeCount: 20, skipCount: 0 } });
    }
    return function cleanup() {
      window.removeEventListener('scroll', onScroll);
    };
    // eslint-disable-next-line
  }, [user.isUserLoggedIn]);

  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
  const onScroll = () => {
    const currentScrollHeight = window.scrollY;
    if (Math.ceil(currentScrollHeight) >= scrollableHeight) {
      console.log('scrolled to bottom!', loadedCount, serverCount);

      if (loadedCount < serverCount || loadedCount === 0) {
        console.log('loading next');
        dispatch({ type: 'GET_NOTES', payload: { takeCount: 10, skipCount: loadedCount } });
      }
    }
  };

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
