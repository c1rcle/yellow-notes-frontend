import React from 'react';
import Note from './Note';
import { Row, Col } from 'react-bootstrap';
import useUser from '../../../contexts/UserContext';
import { Redirect } from 'react-router-dom';

const Notes = () => {
  const [user] = useUser();
  return (
    <>
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
