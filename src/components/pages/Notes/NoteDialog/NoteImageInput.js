import React from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';

const NoteImageInput = ({ onChangeImageUrl, imageUrl }) => {
  const onChange = e => onChangeImageUrl(e.target.value);

  return (
    <InputGroup className='mb-3'>
      <FormControl value={imageUrl} onChange={onChange} placeholder='Paste image URL here' />
    </InputGroup>
  );
};

export default NoteImageInput;
