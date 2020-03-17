import React, { useState } from 'react';
import Note from './Note';
import { Row, Col, ListGroupItem, ListGroup, Form, Button } from 'react-bootstrap';
import useUser from '../../../contexts/UserContext';
import { Redirect } from 'react-router-dom';

const Notes = () => {
  const [user] = useUser();
  console.log(user);
  return (
    <>
      <AddNote />
      <Row>
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
    console.log(note);
    setNote('');
  };

  return (
    <ListGroup className='mt-3 mb-3'>
      <ListGroupItem>
        <Form className='d-flex' onSubmit={handleSubmit}>
          <Form.Control
            type='text'
            placeholder='New note'
            value={note}
            onChange={e => setNote(e.target.value)}
          />
          <Button className='btn-lg ml-3 p-0' type='submit'>
            <i className='fas fa-plus mr-2 ml-2' />
          </Button>
        </Form>
      </ListGroupItem>
    </ListGroup>
  );
}
