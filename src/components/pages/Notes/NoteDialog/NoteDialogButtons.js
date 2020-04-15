import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import useNotes from '../../../../contexts/NotesContext';
import DialogEditFooter from './DialogEditFooter';

const NoteDialogButtons = props => {
  const { onDelete } = props;
  const [, , { closeDialog, note }] = useNotes();

  const isNoteNew = !note || note.noteId === undefined;

  return (
    <>
      {isNoteNew ? (
        <Modal.Footer>
          <Button variant='outline-secondary' onClick={closeDialog} tabIndex='3'>
            Cancel
          </Button>
          <Button variant='outline-primary' type='submit' tabIndex='4'>
            Create
          </Button>
        </Modal.Footer>
      ) : (
        <DialogEditFooter onDelete={onDelete} note={note} />
      )}
    </>
  );
};

export default NoteDialogButtons;
