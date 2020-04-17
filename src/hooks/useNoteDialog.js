import { useState } from 'react';

function useNoteDialog() {
  const [dialogVisible, setDialogVisible] = useState(false);
  const [note, setNote] = useState(undefined);

  const openDialog = note => {
    setNote(() => note);
    setDialogVisible(true);
  };
  const closeDialog = () => {
    setDialogVisible(false);
  };

  return { dialogVisible, openDialog, closeDialog, note };
}
export default useNoteDialog;
