import React from 'react';
import { FormControl } from 'react-bootstrap';

const Note = props => {
  const { content } = props;
  return (
    <>
      <FormControl disabled='true' as='textarea' rows='5'>
        {content}
      </FormControl>
    </>
  );
};

export default Note;
