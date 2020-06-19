import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import InfiniteScroll from 'react-infinite-scroller';
import Masonry from 'react-masonry-component';
import ConnectionError from '../ConnectionError';
import Note from './Note';
import EmptyContainer from './EmptyContainer';
import NoteLoader from './NoteLoader';
import useNotes from '../../../contexts/NotesContext';
import useFilters from '../../../contexts/FiltersContext';
import useNoteLoading from '../../../hooks/useNoteLoading';

const NoteContainer = () => {
  const [
    { notes, note, isLoading, loadedCount, serverCount, error },
    dispatch,
    { openDialog }
  ] = useNotes();
  const [{ needUpdate }, dispatchFilters] = useFilters();
  const loadNotes = useNoteLoading();

  const [connectionError, setConnectionError] = useState(false);
  const [retry, setRetry] = useState(false);

  const onError = () => {
    error && error.message === 'Unable to load notes!' && setConnectionError(true);
  };
  useEffect(onError, [error]);

  const onRetry = () => {
    if (retry) {
      setConnectionError(false);
      setRetry(false);
    }
  };
  useEffect(onRetry, [retry]);

  const match = useRouteMatch('/notes/:noteId');
  const checkRouteMatch = () => {
    if (match && !isLoading && (!note || match.params.noteId !== note.noteId.toString())) {
      dispatch({ type: 'GET_NOTE', payload: { noteId: match.params.noteId } });
    }
  };
  useEffect(checkRouteMatch, [match]);

  const openNote = () => note && openDialog(note);
  useEffect(openNote, [note]);

  const onFilterChange = () => {
    dispatch({ type: 'CLEAR_NOTES' });
    dispatchFilters({ type: 'NEED_UPDATE', payload: false });
  };
  useEffect(onFilterChange, [needUpdate]);

  return (
    <>
      {connectionError ? (
        <ConnectionError setRetry={setRetry} />
      ) : (
        <InfiniteScroll
          datalength={notes.length}
          loadMore={() => loadNotes(6, loadedCount)}
          hasMore={(loadedCount < serverCount || serverCount === -1) && !connectionError}
          loader={<NoteLoader key={-1} />}>
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
      )}
    </>
  );
};

export default NoteContainer;
