import React, { useState } from 'react';
import { Card, Form } from 'react-bootstrap';
import '../../../styles/notes.css';
import NoteDialog from './NoteDialog';

const Note = props => {
  const [dialogVisible, setDialogVisible] = useState(false);
  const toggleDialog = e => setDialogVisible(!dialogVisible);

  const { content } = props;
  return (
    <>
      <Card className='shadow-sm' onClick={e => toggleDialog(e)}>
        <Card.Body className='p-0'>
          <Form.Control
            disabled
            as='textarea'
            className='note-item'
            rows={5}
            value={content}
            style={{ cursor: 'pointer' }}
          />
        </Card.Body>
      </Card>
      <NoteDialog
        mode={'edit'}
        body={content}
        closeDialog={toggleDialog}
        dialogVisible={dialogVisible}
      />
    </>
  );
};

export default Note;
