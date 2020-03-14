import React from 'react';
import { Card } from 'react-bootstrap';
import './notes.css';

const Note = props => {
  const { content } = props;
  return (
    <div className='note-item'>
      <Card.Body disabled='true' as='textarea' rows='5'>
        {content}
      </Card.Body>
    </div>
  );
};

export default Note;
