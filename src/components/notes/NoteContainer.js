import React from 'react';
import Note from './Note';

const NoteContainer = () => {
  const userNotes = [
    {
      content: 'Some example text'
    },
    {
      content: 'Multi \nline \ntext'
    }
  ];
  return (
    <div>
      {userNotes.map(note => (
        <Note content={note.content} />
      ))}
    </div>
  );
};

export default NoteContainer;
