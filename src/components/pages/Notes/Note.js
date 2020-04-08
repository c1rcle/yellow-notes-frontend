import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import '../../../styles/notes.css';
import useNotes from '../../../contexts/NotesContext';
import { useState } from 'react';
import Moment from 'react-moment';

const Note = ({ note }) => {
  const [, , { openDialog }] = useNotes();
  const [expanded, setExpanded] = useState(false);

  return (
    <Card className='shadow-sm note-card'>
      <Card.Header className='d-flex justify-content-between'>
        <Card.Title className='my-auto overflow-ellipsis'>{note.title}</Card.Title>
        <Button variant='outline-primary' onClick={() => setExpanded(!expanded)}>
          <i className={'fas fa-' + (expanded ? 'compress-alt' : 'expand-alt')} />
        </Button>
      </Card.Header>
      <Card.Body>
        <div className='content'>{note.content}</div>
      </Card.Body>
      {expanded && (
        <Card.Footer className='d-flex justify-content-between'>
          <div style={{ fontSize: '0.95rem' }} className='my-auto'>
            <i className='far fa-calendar-alt pr-1' />
            <Moment format='YYYY-MM-DD HH:mm'>{note.timestamp}</Moment>
          </div>
          <Button variant='outline-primary' onClick={() => openDialog({ ...note })}>
            Edit
          </Button>
        </Card.Footer>
      )}
    </Card>
  );
};

export default Note;
