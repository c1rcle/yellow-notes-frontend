import React, { useState } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

const NoteImageInput = ({ setShowImageInput, onChangeImageUrl, imageUrl }) => {
  // const [imageUrl, setImageUrl] = useState('');

  const onChange = e => onChangeImageUrl(e.target.value);

  return (
    <InputGroup className='mb-3'>
      <FormControl value={imageUrl} onChange={onChange} placeholder='Paste image URL here' />
      <InputGroup.Append>
        <Button onClick={() => setShowImageInput(false)} variant='outline-secondary'>
          Save
        </Button>
      </InputGroup.Append>
    </InputGroup>
  );
};

export default NoteImageInput;
