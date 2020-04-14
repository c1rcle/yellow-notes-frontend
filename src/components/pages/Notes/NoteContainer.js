import React, { useEffect } from 'react';
import { Col } from 'react-bootstrap';
import Masonry from 'react-masonry-component';
import useUser from '../../../contexts/UserContext';
import useNotes from '../../../contexts/NotesContext';
import Note from './Note';
import InfiniteScroll from 'react-infinite-scroller';
import EmptyContainer from './EmptyContainer';

const NoteContainer = () => {
  const [user] = useUser();
  const [{ notes, isLoading, loadedCount, serverCount }, dispatch] = useNotes();

  const initializeNotes = () => {
    user.isUserLoggedIn
      ? dispatch({ type: 'GET_NOTES', payload: { takeCount: 9, skipCount: 0 } })
      : dispatch({ type: 'CLEAR_NOTES' });
  };
  useEffect(initializeNotes, [user.isUserLoggedIn]);

  const loadNextNotes = () => {
    if (isLoading) return;

    if (loadedCount < serverCount || serverCount === -1) {
      dispatch({
        type: 'GET_NOTES',
        payload: { takeCount: 6, skipCount: loadedCount }
      });
    }
  };

  return (
    <InfiniteScroll
      datalength={notes.length}
      loadMore={loadNextNotes}
      hasMore={loadedCount < serverCount}
      loader={<div key={1}>loading...</div>}>
      {notes.length === 0 && <EmptyContainer />}
      <Masonry enableResizableChildren={true} className='pb-3'>
        {notes &&
          notes.map(note => (
            <Col lg={4} className='mt-3' key={note.noteId}>
              <Note note={note} />
            </Col>
          ))}
      </Masonry>
    </InfiniteScroll>
  );
};

export default NoteContainer;
