import React, { useContext, useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import TodoItem from './TodoItem';
import useNotes from '../../../contexts/NotesContext';
import { ItemState } from '../context/ItemContext';

const Dialog = () => {
  const [, dispatch, { dialogVisible, closeDialog, note }] = useNotes();
  const [formData, setFormData] = useState({ title: '', content: '' });
  const { title, content } = formData;

  useEffect(() => {
    dialogVisible && note && setFormData(() => ({ ...note }));
  }, [dialogVisible, note]);

  const onChange = e => {
    e.target && setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Modal show={dialogVisible} onHide={() => setDialogVisible(false)}>
      <Modal.Header closeButton>
        <Modal.Title>New todo list</Modal.Title>
      </Modal.Header>

      <Form onSubmit={addListPressed}>
        <Modal.Header closeButton>
          <Modal.Title>
            <Form.Control name='title' type='text' placeholder='ToDo list Title' />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ItemState>
            <TodoItem />
          </ItemState>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={() => setDialogVisible(false)}>
            Cancel
          </Button>
          <Button variant='primary' type='submit'>
            Create
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default Dialog;
