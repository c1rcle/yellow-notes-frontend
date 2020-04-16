import React from 'react';
import { Card } from 'react-bootstrap';
import Moment from 'react-moment';
import useNotes from '../../../contexts/NotesContext';
import { getTextColor } from '../../../utility/colorUtility';
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
        {<i className={`fas fa-${i.checked ? 'check' : 'times'} fa-fw`} />}
        {i.content}
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
      className={`shadow-sm note-card ${getTextColor(note.color)}`}
      style={{ backgroundColor: note.color }}>
      <Card.Header>
        <Card.Title className='my-auto overflow-ellipsis p-1'>{note.title}</Card.Title>
      </Card.Header>
      <Card.Body>{contentDiv(note)}</Card.Body>
      <Card.Footer>
        <div className='my-auto timestamp'>
          <Moment format='YYYY-MM-DD HH:mm'>{note.timestamp}</Moment>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default Note;
