import React, { useState } from 'react';
import { ListGroupItem, ListGroup, Form, Button } from 'react-bootstrap';
import useNotes from '../../../contexts/NotesContext';

const AddNote = () => {
  const [, dispatch] = useNotes();
  const [note, setNote] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    if (note === '') return;
    dispatch({ type: 'ADD_NOTE', payload: { content: note } });
    setNote('');
  };

  return (
    <ListGroup className='mt-3 mb-3 shadow-sm'>
      <ListGroupItem>
        <Form className='d-flex' onSubmit={handleSubmit}>
          <Form.Control
            type='text'
            placeholder='New note'
            value={note}
            onChange={e => setNote(e.target.value)}
          />
          <Button variant='outline-info' type='submit' className='ml-3'>
            <i className='fas fa-plus' />
          </Button>
        </Form>
      </ListGroupItem>
    </ListGroup>
  );
};

export default AddNote;
