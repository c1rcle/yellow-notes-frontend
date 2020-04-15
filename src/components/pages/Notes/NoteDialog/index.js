import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import useNotes from '../../../../contexts/NotesContext';
import NoteDialogForm from './NoteDialogForm';
import NoteDialogButtons from './NoteDialogButtons';

const NoteDialog = () => {
  const emptyNote = { title: '', content: '', variant: 0 };

  const [, dispatch, { dialogVisible, closeDialog, note }] = useNotes();
  const [formData, setFormData] = useState({ ...emptyNote });

  const isNoteNew = !note || note.noteId === undefined;

  const updateNote = () => {
    dialogVisible &&
      (isNoteNew
        ? setFormData(() => ({ ...emptyNote, ...note }))
        : setFormData(() => ({ ...note })));
  };
  useEffect(updateNote, [dialogVisible, note]);

  const onSubmit = e => {
    e.preventDefault();
    if (!formData.title) return; // TODO: add invalid note error

    isNoteNew
      ? dispatch({
          type: 'ADD_NOTE',
          payload: { ...formData }
        })
      : Object.keys(formData).length > 1 &&
        formData.noteId &&
        dispatch({
          type: 'EDIT_NOTE',
          payload: {
            ...Object.keys(formData)
              .filter(key => formData[key] !== note[key])
              .reduce((res, key) => ({ ...res, [key]: formData[key] }), {}),
            noteId: note.noteId
          }
        });

    setFormData(() => ({ ...emptyNote }));
    closeDialog();
  };

  const onDelete = () => {
    dispatch({
      type: 'REMOVE_NOTE',
      payload: { ...formData }
    });
    closeDialog();
  };

  return (
    <Modal show={dialogVisible} onHide={closeDialog}>
      <NoteDialogForm onSubmit={onSubmit} formData={formData} setFormData={setFormData}>
        <NoteDialogButtons onDelete={onDelete} />
      </NoteDialogForm>
    </Modal>
  );
};

export default NoteDialog;
