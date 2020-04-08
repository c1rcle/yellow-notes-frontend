import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';

const EmptyContainer = () => {
  return (
    <Row className='justify-content-center'>
      <Col xs={11} className='my-4 text-center'>
        <div className='display-4 text-primary'>it's empty here!</div>
        <p className='lead mt-3'>
          Click the
            <Button disabled variant='outline-success' className='mx-2'>
              <i className='fas fa-bars mr-1' />
              Text
            </Button>
          button on the navigation bar to start.
        </p>
      </Col>
    </Row>
  );
};

export default EmptyContainer;
