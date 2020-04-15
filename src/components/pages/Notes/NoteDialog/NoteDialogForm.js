import React from 'react';
import { Modal, Form } from 'react-bootstrap';
import Todo from '../Todo';

const NoteDialogForm = props => {
  const { children, onSubmit, formData, setFormData } = props;
  const { title, content } = formData;

  const onChange = e => {
    e.target && setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Form onSubmit={onSubmit}>
      <Modal.Header closeButton>
        <Modal.Title>
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
          <Todo name='content' value={content} onChange={e => onChange(e)} rows='3' tabIndex='2' />
        )}
      </Modal.Body>
      {children}
    </Form>
  );
};

export default NoteDialogForm;
