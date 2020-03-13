import React from 'react';
import { Col } from 'react-bootstrap';

const Note = props => {
  const { content } = props;
  return (
    <>
        <Col sm={4} className="h-100 d-inline-block text-wrap multiline">
          {content}
        </Col>
    </>
  );
};

export default Note;
