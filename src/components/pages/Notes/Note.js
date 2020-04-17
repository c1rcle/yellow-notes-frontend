import React from 'react';
import { Card, Button } from 'react-bootstrap';
import SimpleBar from 'simplebar-react';
import useNotes from '../../../contexts/NotesContext';
import Moment from 'react-moment';
import '../../../styles/notes.css';
import 'simplebar/dist/simplebar.min.css';

const Note = ({ note }) => {
  const [, , { openDialog }] = useNotes();
  const todoListDiv = content => {
    let parsedContent;
    try {
      parsedContent = JSON.parse(content);
    } catch (error) {
      parsedContent = [];
    }
    return parsedContent.map(i => (
      <div key={i.id}>
        {<i className={`far fa-${i.checked ? 'check-square' : 'square'} fa-fw`} />}
        {i.checked ? <del>{i.content}</del> : i.content}
      </div>
    ));
  };
  const contentDiv = note => {
    return (
      <div className={'content-expanded'}>
        {note.variant === 0 ? note.content : todoListDiv(note.content)}
      </div>
    );
  };

  return (
    <Card className='shadow-sm note-card '>
      <Card.Header className='d-flex justify-content-between'>
        <Card.Title className='my-auto overflow-ellipsis p-1'>{note.title}</Card.Title>
        <Button variant='outline-primary' onClick={() => openDialog({ ...note })}>
          Edit
        </Button>
      </Card.Header>
      <Card.Body>
        <SimpleBar className='scrollbar'>{contentDiv(note)}</SimpleBar>
      </Card.Body>
      <Card.Footer className='py-0 pr-1'>
        <div className='my-auto timestamp text-right'>
          <Moment className='small' format='YYYY-MM-DD HH:mm'>
            {note.timestamp}
          </Moment>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default Note;
