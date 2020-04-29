import React, { useEffect, useRef, useState } from 'react';
import { Modal, Form } from 'react-bootstrap';
import Todo from '../Todo';
import { getVariant, getFormColor } from '../../../../utility/colorUtility';

const NoteDialogForm = props => {
  const [titleState, setTitleState] = useState({ hover: false, focus: false });
  const { isNoteNew, children, onSubmit, formData, setFormData, dialogVisible } = props;
  const { title, content, color, isBlocked } = formData;
  
  const inputElement = useRef(null);

  const onChange = e => {
    e.target && setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (dialogVisible && isNoteNew && inputElement.current) {
      inputElement.current.focus();
    }
  }, [dialogVisible, isNoteNew]);

  return (
    <Form onSubmit={onSubmit}>
      <Modal.Header
        style={{
          backgroundColor: color,
          borderBottom: 'none'
        }}>
        <Modal.Title style={{ width: '100%' }}>
          <Form.Control
            readOnly={isBlocked && !isNoteNew}
            ref={inputElement}
            name='title'
            value={title}
            onChange={e => onChange(e)}
            type='text'
            placeholder='Note Title'
            tabIndex='1'
            className={`note-title border-0 text-${getVariant(color)} placeholder-${getVariant(
              color
            )}`}
            style={{
              backgroundColor: titleState.hover || titleState.focus ? getFormColor(color) : color
            }}
            onMouseOver={() => setTitleState({ ...titleState, hover: true })}
            onMouseOut={() => setTitleState({ ...titleState, hover: false })}
            onFocus={() => setTitleState({ ...titleState, focus: true })}
            onBlur={() => setTitleState({ ...titleState, focus: false })}
          />
        </Modal.Title>
      </Modal.Header>

      <Modal.Body style={{ backgroundColor: color }}>
        {formData.variant === 0 ? (
          <Form.Control
            readOnly={isBlocked && !isNoteNew}
            name='content'
            value={content}
            onChange={e => onChange(e)}
            as='textarea'
            rows='3'
            placeholder='Note Content'
            tabIndex='2'
            className={`border-0 text-${getVariant(color)} placeholder-${getVariant(color)}`}
            style={{ backgroundColor: getFormColor(color) }}
          />
        ) : (
          <Todo
            name='content'
            isNoteNew={isNoteNew}
            data={formData}
            onChange={e => onChange(e)}
            rows='3'
            tabIndex='2'
          />
        )}
      </Modal.Body>
      {children}
    </Form>
  );
};

export default NoteDialogForm;
