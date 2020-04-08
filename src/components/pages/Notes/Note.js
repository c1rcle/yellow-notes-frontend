import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import SimpleBar from 'simplebar-react';
import useNotes from '../../../contexts/NotesContext';
import Moment from 'react-moment';
import '../../../styles/notes.css';
import 'simplebar/dist/simplebar.min.css';

const Note = ({ note }) => {
  const [, , { openDialog }] = useNotes();
  const [expanded, setExpanded] = useState(false);

  return (
    <Card className='shadow-sm note-card '>
      <Card.Header className='d-flex justify-content-between'>
        <Card.Title className='my-auto overflow-ellipsis'>{note.title}</Card.Title>
        <Button variant='outline-primary' onClick={() => setExpanded(!expanded)}>
          <i className={'fas fa-' + (expanded ? 'compress-alt' : 'expand-alt')} />
        </Button>
      </Card.Header>
      <Card.Body>
        {expanded ? (
          <SimpleBar className='scrollbar'>
            <div className='content-expanded'>{note.content}</div>
          </SimpleBar>
        ) : (
          <div className='content-collapsed'>{note.content}</div>
        )}
      </Card.Body>
      {expanded && (
        <Card.Footer className='d-flex justify-content-between'>
          <div className='my-auto timestamp'>
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
