import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import useNotes from '../../../contexts/NotesContext';
import Moment from 'react-moment';

const NoteDialog = () => {
  const [, dispatch, { dialogVisible, closeDialog, note }] = useNotes();
  const [formData, setFormData] = useState({
    title: '',
    content: ''
  });
  const { title, content } = formData;

  useEffect(() => {
    console.log(dialogVisible, note);
    dialogVisible && note && setFormData(() => ({ ...note }));
  }, [dialogVisible, note]);

  const onClose = () => closeDialog();

  const onChange = e => {
    if (e.target) console.log(e.target, e.target.name, e.target.value);
    e.target && setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    console.log({ ...formData });
    if (!note) {
      if (title !== '' && content !== '') {
        dispatch({
          type: 'ADD_NOTE',
          payload: { ...formData }
        });
      }
    } else {
      dispatch({
        type: 'EDIT_NOTE',
        payload: { ...formData }
      });
    }

    setFormData(() => ({
      title: '',
      content: ''
    }));
    onClose(e);
  };

  const onDelete = e => {
    // TODO - delete note action
    dispatch({
      type: 'REMOVE_NOTE',
      payload: { ...formData }
    });
    onClose();
  };

  return (
    <Modal show={dialogVisible} onHide={onClose}>
      <Form onSubmit={onSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>
            <Form.Control
              name='title'
              value={title}
              onChange={e => onChange(e)}
              type='text'
              placeholder='Note Title'
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            name='content'
            value={content}
            onChange={e => onChange(e)}
            as='textarea'
            rows='3'
            placeholder='Note Content'
          />
        </Modal.Body>
        {!note ? (
          <Modal.Footer>
            <Button variant='secondary' onClick={onClose}>
              Cancel
            </Button>
            <Button variant='primary' type='submit'>
              Create
            </Button>
          </Modal.Footer>
        ) : (
          <Modal.Footer>
            <Form.Label style={{ marginRight: 'auto', fontSize: '0.95rem' }}>
              <i className='far fa-calendar-alt pr-1' />
              <Moment format='YYYY-MM-DD HH:mm'>{note.timestamp}</Moment>
            </Form.Label>
            <Button variant='secondary' onClick={onClose}>
              Close
            </Button>
            <Button variant='danger' onClick={onDelete}>
              Remove
            </Button>
            <Button variant='primary' type='submit'>
              Save
            </Button>
          </Modal.Footer>
        )}
      </Form>
    </Modal>
  );
};

export default NoteDialog;
