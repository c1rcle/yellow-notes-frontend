import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import { useAlert } from 'react-alert';
import useNoteAction from '../../../../hooks/useNoteAction';
import useTimeout from '../../../../hooks/useTimeout';
import useNotes from '../../../../contexts/NotesContext';
import NoteDialogForm from './NoteDialogForm';
import NoteDialogFooter from './NoteDialogFooter';

const NoteDialog = () => {
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
  // const [imageUrl, setImageUrl] = useState('');

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

  const onHide = () => {
    isNoteNew ? closeDialog() : onSubmit();
  };

  const onSubmit = e => {
    if (e) e.preventDefault();

    if (!formData.title) {
      alert.show('Note title cannot be empty!');
      return;
    }
    // formData.imageUrl = imageUrl;
    console.log(formData);
    isNoteNew ? addNote(formData) : editNote(formData, note);
    closeDialog();
  };

  const onDelete = () => {
    removeNote(formData);
    closeDialog();
  };

  const onCtrlEnter = e => {
    if (e.ctrlKey && e.keyCode === 13) onSubmit(e);
  };

  return (
    <Modal
      show={dialogVisible}
      onHide={onHide}
      onKeyDown={e => onCtrlEnter(e)}
      enforceFocus={false}>
      <NoteDialogForm
        isNoteNew={isNoteNew}
        dialogVisible={dialogVisible}
        onSubmit={onSubmit}
        formData={formData}
        setFormData={setFormData}>
        <NoteDialogFooter
          isNoteNew={isNoteNew}
          note={note}
          formData={formData}
          setFormData={setFormData}
          onDelete={onDelete}
        />
      </NoteDialogForm>
    </Modal>
  );
};

export default NoteDialog;
