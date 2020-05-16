import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const useNoteDialog = dispatch => {
  const [dialogVisible, setDialogVisible] = useState(false);
  const [note, setNote] = useState(undefined);

  let history = useHistory();

  const updateLink = note => {
    note &&
      note.noteId &&
      history.replace(`/notes/${note.noteId}/${note.title.substring(0, 25).replace(/\s+/g, '-')}`);
  };

  const openDialog = note => {
    setNote(() => note);
    setDialogVisible(true);
    updateLink(note);
  };

  const closeDialog = () => {
    dispatch({ type: 'CLEAR_NOTE' });
    setDialogVisible(false);
    history.replace('/notes');
  };

  return { dialogVisible, openDialog, closeDialog, updateLink, note, setNote, setDialogVisible };
};
export default useNoteDialog;
