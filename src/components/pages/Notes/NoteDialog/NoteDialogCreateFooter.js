import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const NoteDialogCreateFooter = ({ closeDialog }) => {
  return (
    <Modal.Footer>
      <Button variant='outline-secondary' onClick={closeDialog} tabIndex='3'>
        Cancel
      </Button>
      <Button variant='outline-primary' type='submit' tabIndex='4'>
        Create
      </Button>
    </Modal.Footer>
  );
};

export default NoteDialogCreateFooter;
