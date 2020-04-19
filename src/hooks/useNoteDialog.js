import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const useNoteDialog = () => {
  const [dialogVisible, setDialogVisible] = useState(false);
  const [note, setNote] = useState(undefined);

  let history = useHistory();

  const openDialog = note => {
    setNote(() => note);
    setDialogVisible(true);
    note &&
      note.noteId &&
      history.replace(`/notes/${note.noteId}/${note.title.substring(0, 25).replace(' ', '_')}`);
  };

  const closeDialog = () => {
    setDialogVisible(false);
    history.replace('/notes');
  };

  return { dialogVisible, openDialog, closeDialog, note };
};
export default useNoteDialog;
