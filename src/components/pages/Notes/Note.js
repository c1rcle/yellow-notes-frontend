import React, { useState } from 'react';
import { Card, Form } from 'react-bootstrap';
import '../../../styles/notes.css';
import NoteDialog from './NoteDialog';

const Note = props => {
  const [dialogVisible, setDialogVisible] = useState(false);
  const showDialog = e => setDialogVisible(!dialogVisible);

  const { content } = props;
  return (
    <>
      <Card className='shadow-sm' onClick={e => showDialog(e)}>
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
      <NoteDialog body={content} closeDialog={showDialog} dialogVisible={dialogVisible} />
    </>
  );
};

export default Note;
