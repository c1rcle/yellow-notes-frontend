import React from 'react';
import { Redirect } from 'react-router-dom';
import { NotesProvider } from '../../../contexts/NotesContext';
import useUser from '../../../contexts/UserContext';
import NoteContainer from './NoteContainer';
import AddNote from './AddNote';

const Notes = () => {
  const [user] = useUser();
  return (
    <NotesProvider>
      {user.isUserLoggedIn || <Redirect to='/' />}
      <AddNote />
      <NoteContainer />
    </NotesProvider>
  );
};

export default Notes;
