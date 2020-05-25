import React from 'react';
import { Redirect } from 'react-router-dom';
import useUser from '../../../contexts/UserContext';
import NoteContainer from './NoteContainer';
import NoteDialog from './NoteDialog';
import CategoryBar from './CategoryBar';

const Notes = () => {
  const [user] = useUser();

  return (
    <>
      <CategoryBar />
      <NoteContainer />
      <NoteDialog />
      {user.isUserLoggedIn || <Redirect to='/' />}
    </>
  );
};

export default Notes;
