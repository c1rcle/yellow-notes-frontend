import React from 'react';
import { Card } from 'react-bootstrap';
import Moment from 'react-moment';
import useNotes from '../../../contexts/NotesContext';
import { getVariant } from '../../../utility/colorUtility';
import '../../../styles/notes.css';

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
      <div className='content'>{note.variant === 0 ? note.content : todoListDiv(note.content)}</div>
    );
  };

  return (
    <Card
      onClick={() => openDialog({ ...note })}
      className={`shadow-sm note-card text-${getVariant(note.color)}`}
      style={{ backgroundColor: note.color }}>
      <Card.Header>
        <Card.Title className='my-auto overflow-ellipsis p-1'>{note.title}</Card.Title>
      </Card.Header>
      <Card.Body>{contentDiv(note)}</Card.Body>
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
