import React from 'react';
import { Modal, Form } from 'react-bootstrap';
import Todo from '../Todo';
import { getTextColor, getFormColor } from '../../../../utility/colorUtility';

const NoteDialogForm = props => {
  const { children, onSubmit, formData, setFormData } = props;
  const { title, content } = formData;

  const onChange = e => {
    e.target && setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Form onSubmit={onSubmit}>
      <Modal.Header closeButton style={{ backgroundColor: formData.color, borderBottom: 'none' }}>
        <Modal.Title>
          <Form.Control
            name='title'
            value={title}
            onChange={e => onChange(e)}
            type='text'
            placeholder='Note Title'
            tabIndex='1'
            className={getTextColor(formData.color)}
            style={{ backgroundColor: getFormColor(formData.color) }}
          />
        </Modal.Title>
      </Modal.Header>

      <Modal.Body style={{ backgroundColor: formData.color }}>
        {formData.variant === 0 ? (
          <Form.Control
            name='content'
            value={content}
            onChange={e => onChange(e)}
            as='textarea'
            rows='3'
            placeholder='Note Content'
            tabIndex='2'
            className={getTextColor(formData.color)}
            style={{ backgroundColor: getFormColor(formData.color) }}
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
