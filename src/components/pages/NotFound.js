import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

const NotFound = () => {
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
