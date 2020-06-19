import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import { useAlert } from 'react-alert';
import useNoteAction from '../../../../hooks/useNoteAction';
import useTimeout from '../../../../hooks/useTimeout';
import useNotes from '../../../../contexts/NotesContext';
import useFilters from '../../../../contexts/FiltersContext';
import NoteDialogForm from './NoteDialogForm';
import NoteDialogFooter from './NoteDialogFooter';

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
  const [{ filters }] = useFilters();
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
    if (formData.title && !isNoteNew && dialogVisible) {
      const checkedFilters = filters.filter(f => f.checked).map(f => f.categoryId);
      editNote(formData, note, checkedFilters);
    }
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

    const checkedFilters = filters.filter(f => f.checked).map(f => f.categoryId);
    isNoteNew ? addNote(formData, checkedFilters) : editNote(formData, note, checkedFilters);
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
