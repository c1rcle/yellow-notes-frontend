import React, { useState, useRef, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import useUser from '../../../contexts/UserContext';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const NoteDialog = ({ dialogVisible, closeDialog, note }) => {
  const [show, setShow] = useState(dialogVisible);

  const didMountRef = useRef(false);
  useEffect(() => {
    if (didMountRef.current) {
      setShow(dialogVisible);
    } else didMountRef.current = true;

    if (note) {
      setFormData({ title: note.title, content: note.content });
    }
  }, [setShow, dialogVisible, note]);

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
    if (!note) {
      if (title !== '' && content !== '') {
        dispatch({
          type: 'ADD_NOTE',
          payload: { content }
        });
      }
    } else {
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
    <Modal show={show} onHide={onClose}>
      <Form onSubmit={e => onSubmit(e)}>
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

NoteDialog.propTypes = {
  dialogVisible: PropTypes.bool.isRequired,
  closeDialog: PropTypes.func.isRequired,
  note: PropTypes.object
};

export default NoteDialog;
