import React, { useEffect, useRef } from 'react';
import { Modal, Form } from 'react-bootstrap';
import TextareaAutosize from 'react-textarea-autosize';
import NoteImage from './NoteImage';
import Todo from '../Todo';
import HoverableControl from '../../../common/controls/HoverableControl';
import { getVariant, getFormColor } from '../../../../utility/colorUtility';
import useActiveElement from '../../../../hooks/useActiveElement';

const NoteDialogForm = props => {
  const {
    isNoteNew,
    children,
    onSubmit,
    formData,
    setFormData,
    dialogVisible,
    todoContent,
    setTodoContent
  } = props;
  const { title, content, color, isBlocked } = formData;

  const focusedElement = useActiveElement();
  const inputElement = useRef(null);

  const onChange = e => {
    e.target && setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const focusTitle = () => {
    if (dialogVisible && isNoteNew && inputElement.current) {
      inputElement.current.focus();
    }
  };
  useEffect(focusTitle, [dialogVisible]);

  const getFocusedElement = () => {
    if (focusedElement.name) {
      props.setFocusedElement(focusedElement.name);
    }
  };

  useEffect(getFocusedElement, [focusedElement.name]);

  return (
    <Form onSubmit={onSubmit}>
      <Modal.Header
        style={{
          backgroundColor: color,
          borderBottom: 'none'
        }}>
        <Modal.Title style={{ width: '100%' }}>
          <HoverableControl
            type='text'
            readOnly={isBlocked && !isNoteNew}
            ref={inputElement}
            name='title'
            value={title}
            placeholder='Note Title'
            onChange={e => onChange(e)}
            tabIndex='1'
            color={color}
            className={`note-title border-0 text-${getVariant(color)} placeholder-${getVariant(
              color
            )}`}
          />
        </Modal.Title>
      </Modal.Header>

      <Modal.Body style={{ backgroundColor: color }}>
        {formData.imageUrl && <NoteImage imageUrl={formData.imageUrl} dialog={true} />}
        {formData.variant === 0 ? (
          <TextareaAutosize
            readOnly={isBlocked && !isNoteNew}
            name='content'
            value={content}
            placeholder='Note Content'
            onChange={e => onChange(e)}
            tabIndex='2'
            minRows={2}
            maxRows={7}
            className={`autogrow-textarea border-0 text-${getVariant(
              color
            )} placeholder-${getVariant(color)}`}
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
            todoContent={todoContent}
            setTodoContent={setTodoContent}
          />
        )}
      </Modal.Body>
      {children}
    </Form>
  );
};

export default NoteDialogForm;
