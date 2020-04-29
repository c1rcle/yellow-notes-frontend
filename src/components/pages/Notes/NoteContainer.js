import React, { useEffect } from 'react';
import { Col } from 'react-bootstrap';
import Masonry from 'react-masonry-component';
import useNotes from '../../../contexts/NotesContext';
import Note from './Note';
import InfiniteScroll from 'react-infinite-scroller';
import EmptyContainer from './EmptyContainer';
import { useRouteMatch } from 'react-router-dom';
import Spinner from '../../common/Spinner';

const NoteContainer = () => {
  const [
    { notes, note, isLoading, loadedCount, serverCount },
    dispatch,
    { openDialog }
  ] = useNotes();

  const match = useRouteMatch('/notes/:noteId');
  const checkRouteMatch = () => {
    if (match && !isLoading && (!note || match.params.noteId !== note.noteId.toString())) {
      dispatch({ type: 'GET_NOTE', payload: { noteId: match.params.noteId } });
    }
  };
  useEffect(checkRouteMatch, [match]);

  const openNote = () => {
    note && openDialog(note);
  };
  useEffect(openNote, [note]);

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
      hasMore={loadedCount < serverCount || serverCount === -1}
      loader={
        <Col lg={4} className='m-5' key={-1}>
          <Spinner size='xl' />
        </Col>
      }>
      {notes.length === 0 && !isLoading && <EmptyContainer />}
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
