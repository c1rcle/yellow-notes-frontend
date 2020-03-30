import React from 'react';
import { Row, Col } from 'react-bootstrap';
import useNotes from '../../../contexts/NotesContext';
import Note from './Note';

const NoteContainer = () => {
  const [{ notes }] = useNotes();
  return (
    <Row>
      {!notes ||
        notes.map(note => (
          <Col lg={4} className='mt-3' key={note.id}>
            <Note {...note} />
          </Col>
        ))}
    </Row>
  );
};

export default NoteContainer;
