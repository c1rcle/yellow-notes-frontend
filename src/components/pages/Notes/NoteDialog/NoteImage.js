import React from 'react';
import { Image } from 'react-bootstrap';

const NoteImage = ({ imageUrl, dialog }) => {
  return (
    <div className='mb-3'>
      <Image
        src={imageUrl}
        className={dialog ? 'note-image note-image-dialog' : 'note-image'}
        rounded
      />
    </div>
  );
};

export default NoteImage;
