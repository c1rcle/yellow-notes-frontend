import React from 'react';
import { Card, Form } from 'react-bootstrap';
import './notes.css';

const Note = props => {
  const { content } = props;
  return (
    <Card className='shadow-sm'>
      <Card.Body className='p-0'>
        <Form.Control
          disabled
          as='textarea'
          className='note-item'
          rows={5}
          value={content}
        />
      </Card.Body>
    </Card>
  );
};

export default Note;
