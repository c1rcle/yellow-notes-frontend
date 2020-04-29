import React, { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import Moment from 'react-moment';
import useNotes from '../../../contexts/NotesContext';
import { getVariant } from '../../../utility/colorUtility';
import '../../../styles/notes.css';

const Note = ({ note }) => {
  const [, , dialog] = useNotes();
  const { dialogVisible, openDialog, updateLink, setNote } = dialog;

  const updateDialog = () => {
    if (dialogVisible && dialog.note.noteId === note.noteId) {
      setNote(note);
      updateLink(note);
    }
  };
  useEffect(updateDialog, [note]);

  const todoListDiv = content => {
    let parsedContent;
    try {
      parsedContent = JSON.parse(content);
    } catch (error) {
      parsedContent = [];
    }
    return parsedContent
      .sort((a, b) => a.id - b.id)
      .sort((a, b) => Number(a.checked) - Number(b.checked))
      .map(i => (
        <div key={i.id}>
          {<i className={`far fa-${i.checked ? 'check-square' : 'square'} fa-fw`} />}
          {i.checked ? <del>{i.content}</del> : i.content}
        </div>
      ));
  };

  const contentDiv = note => {
    return (
      <div className='content'>{note.variant === 0 ? note.content : todoListDiv(note.content)}</div>
    );
  };

  return (
    <Card
      onClick={() => openDialog(note)}
      className={`shadow-sm note-card text-${getVariant(note.color)}`}
      style={{ backgroundColor: note.color }}>
      <Card.Header className='d-flex justify-content-between'>
        <Card.Title className='my-auto overflow-ellipsis p-1'>{note.title}</Card.Title>
        {note.isBlocked && <i className='timestamp my-auto fas fa-lock fa-fw' />}
      </Card.Header>
      <Card.Body>{contentDiv(note)}</Card.Body>
      <Card.Footer className='pb-2 pr-2'>
        <div className='timestamp text-right'>
          <Moment format='YYYY-MM-DD HH:mm'>{note.modificationDate}</Moment>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default Note;
