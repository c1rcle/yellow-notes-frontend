import React from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

const NoteImageInput = ({ setShowImageInput }) => {
  return (
    <InputGroup className='mb-3'>
      <FormControl placeholder='Paste image URL here' />
      <InputGroup.Append>
        <Button onClick={() => setShowImageInput(false)} variant='outline-secondary'>
          Save
        </Button>
      </InputGroup.Append>
    </InputGroup>
  );
};

export default NoteImageInput;
