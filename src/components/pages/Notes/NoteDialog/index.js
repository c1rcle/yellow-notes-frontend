import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import { useAlert } from 'react-alert';
import useNoteAction from '../../../../hooks/useNoteAction';
import useTimeout from '../../../../hooks/useTimeout';
import useNotes from '../../../../contexts/NotesContext';
import NoteDialogForm from './NoteDialogForm';
import NoteDialogFooter from './NoteDialogFooter';
import { useHistory } from 'react-router-dom';

const NoteDialog = () => {
  let history = useHistory();

  const emptyNote = {
    title: '',
    content: '',
    variant: 0,
    color: '#ffef7f',
    isBlocked: false,
    imageUrl: ''
  };

  const alert = useAlert();
  const { addNote, editNote, removeNote } = useNoteAction();
  const [, , { dialogVisible, closeDialog, note }] = useNotes();
  const [formData, setFormData] = useState({ ...emptyNote });
  const [todoContent, setTodoContent] = useState('');
  const [focusedElement, setFocusedElement] = useState(undefined);

  const isNoteNew = !note || note.noteId === undefined;

  const updateNote = () => {
    if (dialogVisible) {
      const { modificationDate, ...rest } = note || {};
      setFormData(() => ({ ...emptyNote, ...rest }));
    }
  };
  useEffect(updateNote, [dialogVisible]);

  const onNoteModified = () => {
    if (formData.title && !isNoteNew && dialogVisible) editNote(formData, note);
  };
  useTimeout(onNoteModified, formData, 1000);

  const onHide = e => {
    isNoteNew ? closeDialog(e) : onSubmit(e);
  };

  const onSubmit = e => {
    if (e) e.preventDefault();

    if (!formData.title) {
      alert.show('Note title cannot be empty!');
      return;
    }
    isNoteNew ? addNote(formData) : editNote(formData, note);
    closeDialog();
  };

  const onDelete = () => {
    removeNote(formData);
    closeDialog();
  };

  const onKeyDown = e => {
    const enterKeyCode = 13;

    if (e.ctrlKey && e.keyCode === enterKeyCode) onSubmit(e);
    else if (e.keyCode === enterKeyCode && e.target.name === 'title') {
      e.preventDefault();
      e.target.form[1].focus();
    }
  };

  return (
    <Modal
      show={dialogVisible}
      onHide={e => onHide(e)}
      onKeyDown={e => onKeyDown(e)}
      onEscapeKeyDown={() => history.replace('/notes')}
      enforceFocus={false}>
      <NoteDialogForm
        isNoteNew={isNoteNew}
        dialogVisible={dialogVisible}
        onSubmit={onSubmit}
        formData={formData}
        setFormData={setFormData}
        todoContent={todoContent}
        setTodoContent={setTodoContent}
        setFocusedElement={setFocusedElement}>
        <NoteDialogFooter
          isNoteNew={isNoteNew}
          note={note}
          formData={formData}
          setFormData={setFormData}
          onDelete={onDelete}
          focusedElement={focusedElement}
          todoContent={todoContent}
          setTodoContent={setTodoContent}
        />
      </NoteDialogForm>
    </Modal>
  );
};

export default NoteDialog;
