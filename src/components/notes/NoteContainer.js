import React from 'react';
import Note from './Note';
import { Row, Col } from 'react-bootstrap';

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
        <Col sm={4}>
          <Note content={note.content} />
        </Col>
      ))}
    </Row>
  );
};

export default NoteContainer;
