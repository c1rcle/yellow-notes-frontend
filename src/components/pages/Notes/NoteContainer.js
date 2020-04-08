import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import useNotes from '../../../contexts/NotesContext';
import Note from './Note';
import useUser from '../../../contexts/UserContext';
import InfiniteScroll from 'react-infinite-scroller';

const NoteContainer = () => {
  const [user] = useUser();
  const [{ notes, isLoading, loadedCount, serverCount }, dispatch] = useNotes();

  useEffect(() => {
    if (user.isUserLoggedIn)
      dispatch({ type: 'GET_NOTES', payload: { takeCount: 20, skipCount: 0 } }); // eslint-disable-next-line
  }, [user.isUserLoggedIn]);

  const loadNextNotes = () => {
    if (isLoading) return;

    if (loadedCount < serverCount || serverCount === -1) {
      dispatch({
        type: 'GET_NOTES',
        payload: { takeCount: 10, skipCount: loadedCount }
      });
    }
  };

  return (
    <InfiniteScroll
      datalength={notes.length}
      loadMore={loadNextNotes}
      hasMore={loadedCount < serverCount}
      loader={<div key={1}>loading...</div>}>
      <Row className='pb-5'>
        {!notes ||
          notes.map(note => (
            <Col lg={4} className='mt-3' key={note.noteId}>
              <Note note={note} />
            </Col>
          ))}
      </Row>
    </InfiniteScroll>
  );
};

export default NoteContainer;
