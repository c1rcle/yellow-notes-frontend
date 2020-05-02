import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import useNotes from '../../contexts/NotesContext';

const NotFound = () => {
  const [, dispatch, { dialogVisible, setDialogVisible }] = useNotes();

  const clearNote = () => {
    if (dialogVisible) {
      dispatch({ type: 'CLEAR_NOTE' });
      setDialogVisible(false);
    }
  };

  useEffect(clearNote, [dialogVisible]);

  return (
    <Row className='justify-content-center'>
      <Col xs={11} className='my-4 text-center'>
        <div className='display-1 text-primary'>404</div>
        <div className='display-4 text-muted'>oh no! page not found!</div>
        <p className='lead mt-3'>The page you are looking for is not available.</p>
        <Link to='/' className='btn btn-outline-primary mx-auto'>
          <i className={`fas fa-home mr-1`} />
          Go home
        </Link>
      </Col>
    </Row>
  );
};

export default NotFound;
