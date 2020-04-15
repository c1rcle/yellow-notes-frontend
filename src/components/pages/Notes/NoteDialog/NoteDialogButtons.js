import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import useNotes from '../../../../contexts/NotesContext';
import Moment from 'react-moment';

const NoteDialogButtons = props => {
  const { onDelete, children } = props;
  const [, , { closeDialog, note }] = useNotes();

  const isNoteNew = !note || note.noteId === undefined;

  return (
    <Modal.Footer>
      {children}
      {isNoteNew ? (
        <>
          <Button variant='outline-secondary' onClick={closeDialog} tabIndex='3'>
            Cancel
          </Button>
          <Button variant='outline-primary' type='submit' tabIndex='4'>
            Create
          </Button>
        </>
      ) : (
        <>
          <Form.Label style={{ marginRight: 'auto', fontSize: '0.95rem' }}>
            <i className='far fa-calendar-alt pr-1' />
            <Moment format='YYYY-MM-DD HH:mm'>{note.timestamp}</Moment>
          </Form.Label>
          <Button variant='outline-secondary' onClick={closeDialog} tabIndex='3'>
            Close
          </Button>
          <Button variant='outline-danger' onClick={onDelete} tabIndex='4'>
            Remove
          </Button>
          <Button variant='outline-primary' type='submit' tabIndex='5'>
            Save
          </Button>
        </>
      )}
    </Modal.Footer>
  );
};

export default NoteDialogButtons;
