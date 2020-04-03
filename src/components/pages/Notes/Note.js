import React from 'react';
import { Card, Form } from 'react-bootstrap';
import '../../../styles/notes.css'
import useNotes from '../../../contexts/NotesContext';

const Note = ({ note }) => {
  const [, , { openDialog }] = useNotes();

  // TODO - note title and timestamp props
  return (
    <>
      <Card
        className='shadow-sm note-card'
        onClick={() => openDialog({ ...note })}>
        <Card.Body>
          <Card.Title>{note.title}</Card.Title>
          <Form.Control
            disabled
            as='textarea'
            className='note-item p-0'
            rows={5}
            value={note.content}
          />
        </Card.Body>
      </Card>
    </>
  );
};

export default Note;
