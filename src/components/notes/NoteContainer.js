import React from 'react';
import Note from './Note';
import { Row } from 'react-bootstrap';

const NoteContainer = () => {
  const userNotes = [
    {
      content: 'Some example text'
    },
    {
      content: 'Multi \nline \ntext'
    }
  ];
  return (
    <Row>
      {userNotes.map(note => (
        <Note content={note.content} />
      ))}
    </Row>
  );
};

export default NoteContainer;
