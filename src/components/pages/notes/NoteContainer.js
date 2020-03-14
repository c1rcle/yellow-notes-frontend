import React from 'react';
import Note from './Note';
import { Row, Col } from 'react-bootstrap';

const NoteContainer = () => {
  const userNotes = [
    {
      content: 'Some example text'
    },
    {
      content: 'Some example text'
    },
    {
      content: 'Some example text'
    },
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
        <Col sm={4} className='mt-3'>
          <Note {...note} />
        </Col>
      ))}
    </Row>
  );
};

export default NoteContainer;
