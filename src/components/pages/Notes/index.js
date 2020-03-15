import React from 'react';
import Note from './Note';
import { Row, Col } from 'react-bootstrap';
import useUser from '../../../contexts/UserContext';
import { Redirect } from 'react-router-dom';

const Notes = () => {
  const [user] = useUser();
  console.log(user);
  return (
    <>
      <Row>
        {user.email !== undefined || <Redirect to='/' />}
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
