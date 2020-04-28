import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import useNotes from '../contexts/NotesContext';

const useNoteDialog = dispatch => {
  const [dialogVisible, setDialogVisible] = useState(false);
  const [note, setNote] = useState(undefined);

  let history = useHistory();

  const openDialog = note => {
    setNote(() => note);
    setDialogVisible(true);
    note &&
      note.noteId &&
      history.replace(`/notes/${note.noteId}/${note.title.substring(0, 25).replace(/\s+/g, '-')}`);
  };

  const closeDialog = () => {
    dispatch({ type: 'CLEAR_NOTE' });
    setDialogVisible(false);
    setNote(undefined);
    history.replace('/notes');
  };

  return { dialogVisible, openDialog, closeDialog, note, setNote, setDialogVisible };
};
export default useNoteDialog;
