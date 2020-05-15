import React from 'react';
import { Image } from 'react-bootstrap';

const NoteImage = ({ imageUrl, dialog }) => {
  return (
    <div className='mb-3'>
      {dialog ? (
        <a href={imageUrl} target='_blank' rel='noopener noreferrer'>
          <Image src={imageUrl} id='dialog' className='note-image' rounded />
        </a>
      ) : (
        <Image src={imageUrl} className='note-image' rounded />
      )}
    </div>
  );
};

export default NoteImage;
