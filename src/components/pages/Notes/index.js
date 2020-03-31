import React, { useState } from 'react';
import Note from './Note';
import { Row, Col, ListGroupItem, ListGroup, Form, Button } from 'react-bootstrap';
import useUser from '../../../contexts/UserContext';
import { Redirect } from 'react-router-dom';

const Notes = () => {
  const [user] = useUser();
  return (
    <>
      <AddNote />
      <Row className='mb-5'>
        {user.isUserLoggedIn || <Redirect to='/' />}
        {!user.notes ||
          user.notes.map(note => (
            <Col lg={4} className='mt-3' key={note.id}>
              <Note {...note} />
            </Col>
          ))}
      </Row>
    </>
  );
};

export default Notes;

function AddNote() {
  const [, dispatch] = useUser();
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
}
