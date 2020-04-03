import React, { useState } from 'react';
import { Card, Form } from 'react-bootstrap';
import '../../../styles/notes.css';
import NoteDialog from './NoteDialog';

const Note = props => {
  const [dialogVisible, setDialogVisible] = useState(false);
  const toggleDialog = e => setDialogVisible(!dialogVisible);

  const { content } = props;

  // TODO - note title and timestamp props
  const title = 'Note Tilte';
  const timestamp = Date.now();
  return (
    <>
      <Card
        style={{ backgroundColor: '#f8f9fa', cursor: 'pointer' }}
        className='shadow-sm'
        onClick={e => toggleDialog(e)}>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Form.Control disabled as='textarea' className='note-item p-0' rows={5} value={content} />
        </Card.Body>
      </Card>
      <NoteDialog
        note={{ title, content, timestamp }}
        closeDialog={toggleDialog}
        dialogVisible={dialogVisible}
      />
    </>
  );
};

export default Note;
