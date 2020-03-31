import React, { useState, useRef, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import useUser from '../../../contexts/UserContext';

const NoteDialog = ({ mode, dialogVisible, closeDialog, note }) => {
  const [show, setShow] = useState(dialogVisible);

  const didMountRef = useRef(false);
  useEffect(() => {
    if (didMountRef.current) {
      setShow(dialogVisible);
    } else didMountRef.current = true;

    if (mode === 'edit') {
      setFormData({ title: note.title, content: note.content });
    }
  }, [setShow, dialogVisible, mode, note]);

  const onClose = e => closeDialog && closeDialog(e);

  const [, dispatch] = useUser();
  const [formData, setFormData] = useState({
    title: '',
    content: ''
  });

  const { title, content } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (mode === 'create') {
      dispatch({
        type: 'ADD_NOTE',
        payload: { content }
      });
    } else if (mode === 'edit') {
      // TODO - edit note action
      console.log('edited');
    }

    setFormData({
      title: '',
      content: ''
    });
    onClose(e);
  };

  const onDelete = e => {
    // TODO - delete note action
    console.log('deleted');
    onClose(e);
  };

  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form onSubmit={e => onSubmit(e)}>
        <Modal.Header>
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
          />
        </Modal.Body>
        {mode === 'create' ? (
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
            <Button variant='secondary' onClick={onClose}>
              Close
            </Button>
            <Button variant='danger' onClick={() => onDelete()}>
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
