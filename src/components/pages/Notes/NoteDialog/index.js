import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import { useAlert } from 'react-alert';
import useNotes from '../../../../contexts/NotesContext';
import NoteDialogForm from './NoteDialogForm';
import NoteDialogFooter from './NoteDialogFooter';

const NoteDialog = () => {
  const emptyNote = { title: '', content: '', variant: 0, color: '#ffef7f', isBlocked: false };

  const [, dispatch, { dialogVisible, closeDialog, note }] = useNotes();
  const [formData, setFormData] = useState({ ...emptyNote });

  const alert = useAlert();

  const isNoteNew = !note || note.noteId === undefined;

  const updateNote = () => {
    dialogVisible && setFormData(() => ({ ...emptyNote, ...note }));
  };
  useEffect(updateNote, [dialogVisible, note]);

  const filteredProperties = () => {
    return Object.keys(formData).filter(key => formData[key] !== note[key]);
  };

  const onHide = () => {
    isNoteNew ? closeDialog() : onSubmit();
  };

  const onSubmit = e => {
    if (e) e.preventDefault();

    if (!formData.title) {
      alert.show('Note title can not be empty');
      return;
    }

    if (isNoteNew) {
      dispatch({
        type: 'ADD_NOTE',
        payload: { ...formData }
      });
    } else {
      if (filteredProperties().length === 0) {
        closeDialog();
        return;
      }

      Object.keys(formData).length > 1 &&
        formData.noteId &&
        dispatch({
          type: 'EDIT_NOTE',
          payload: {
            ...filteredProperties().reduce((res, key) => ({ ...res, [key]: formData[key] }), {}),
            noteId: note.noteId
          }
        });
    }

    closeDialog();
  };

  const onDelete = () => {
    dispatch({
      type: 'REMOVE_NOTE',
      payload: { ...formData }
    });
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
        onSubmit={onSubmit}
        formData={formData}
        setFormData={setFormData}>
        <NoteDialogFooter
          isNoteNew={isNoteNew}
          formData={formData}
          setFormData={setFormData}
          onDelete={onDelete}
          note={note}
        />
      </NoteDialogForm>
    </Modal>
  );
};

export default NoteDialog;
