import { useState } from 'react';

function useNoteDialog() {
  const [dialogVisible, setDialogVisible] = useState(false);
  const [note, setNote] = useState(undefined);

  const openDialog = note => {
    console.log('ydy');
    setDialogVisible(true);
    setNote(() => note);
  };
  const closeDialog = () => {
    setDialogVisible(false);
    setNote(() => undefined);
  };

  return { dialogVisible, openDialog, closeDialog, note };
}
export default useNoteDialog;
