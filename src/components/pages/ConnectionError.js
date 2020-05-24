import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';

const ConnectionError = ({ setRetry }) => {
  return (
    <Row className='justify-content-center'>
      <Col xs={11} className='my-4 text-center'>
        <div className='display-4 text-primary'>oh no! connection error!</div>
        <p className='lead mt-3'>Your request couldn't be processed.</p>
        <Button variant='outline-primary' onClick={() => setRetry(true)} className='mx-auto'>
          <i className={`fas fa-redo fa-fw mr-1`} />
          Retry
        </Button>
      </Col>
    </Row>
  );
};

export default ConnectionError;
