import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import useNotes from '../../../contexts/NotesContext';
import Moment from 'react-moment';
import Todo from './Todo';

const NoteDialog = () => {
  const emptyNote = { title: '', content: '', variant: 0 };
  const [, dispatch, { dialogVisible, closeDialog, note }] = useNotes();
  const [formData, setFormData] = useState({ ...emptyNote });
  const { title, content } = formData;

  const isNoteNew = !note || note.noteId === undefined;

  useEffect(() => {
    dialogVisible &&
      (isNoteNew
        ? setFormData(() => ({ ...emptyNote, ...note }))
        : setFormData(() => ({ ...note })));
    // eslint-disable-next-line
  }, [dialogVisible, note]);

  const onChange = e => {
    e.target && setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    if (isNoteNew) {
      dispatch({
        type: 'ADD_NOTE',
        payload: { ...formData }
      });
    } else {
      if (!title) {
        return; // TODO: add invalid note error
      }
      if (Object.keys(formData).length > 1 && formData.noteId)
        dispatch({
          type: 'EDIT_NOTE',
          payload: {
            ...Object.keys(formData)
              .filter(key => formData[key] !== note[key])
              .reduce((res, key) => ({ ...res, [key]: formData[key] }), {}),
            noteId: note.noteId
          }
        });
    }

    setFormData(() => ({ ...emptyNote }));
    closeDialog();
  };

  const onDelete = e => {
    dispatch({
      type: 'REMOVE_NOTE',
      payload: { ...formData }
    });
    closeDialog();
  };

  const onCtrlEnter = e => {
    if (e.ctrlKey && e.keyCode === 13) onSubmit(e);
  }

  return (
    <Modal show={dialogVisible} onHide={closeDialog} onKeyDown={e => onCtrlEnter(e)}>
      <Form onSubmit={onSubmit}>
        <Modal.Header closeButton>
          <Modal.Title style={{ width: '100%' }}>
            <Form.Control
              name='title'
              value={title}
              onChange={e => onChange(e)}
              type='text'
              placeholder='Note Title'
              tabIndex='1'
            />
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {formData.variant === 0 ? (
            <Form.Control
              name='content'
              value={content}
              onChange={e => onChange(e)}
              as='textarea'
              rows='3'
              placeholder='Note Content'
              tabIndex='2'
            />
          ) : (
            <Todo
              name='content'
              value={content}
              onChange={e => onChange(e)}
              rows='3'
              tabIndex='2'
            />
          )}
        </Modal.Body>
        {isNoteNew ? (
          <Modal.Footer>
            <Button variant='outline-secondary' onClick={closeDialog} tabIndex='3'>
              Cancel
            </Button>
            <Button variant='outline-primary' type='submit' tabIndex='4'>
              Create
            </Button>
          </Modal.Footer>
        ) : (
          <Modal.Footer>
            <Form.Label style={{ marginRight: 'auto', fontSize: '0.95rem' }}>
              <i className='far fa-calendar-alt pr-1' />
              <Moment format='YYYY-MM-DD HH:mm'>{note.timestamp}</Moment>
            </Form.Label>
            <Button variant='outline-secondary' onClick={closeDialog} tabIndex='3'>
              Close
            </Button>
            <Button variant='outline-danger' onClick={onDelete} tabIndex='4'>
              Remove
            </Button>
            <Button variant='outline-primary' type='submit' tabIndex='5'>
              Save
            </Button>
          </Modal.Footer>
        )}
      </Form>
    </Modal>
  );
};

export default NoteDialog;
