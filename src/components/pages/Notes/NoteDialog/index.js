import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import useNotes from '../../../../contexts/NotesContext';
import NoteDialogForm from './NoteDialogForm';
import NoteDialogFooter from './NoteDialogFooter';
import { useAlert } from 'react-alert';

const NoteDialog = () => {
  const emptyNote = { title: '', content: '', variant: 0, color: '#ffef7f' };

  const [, dispatch, { dialogVisible, closeDialog, note }] = useNotes();
  const [formData, setFormData] = useState({ ...emptyNote });

  const alert = useAlert();

  const isNoteNew = !note || note.noteId === undefined;

  const updateNote = () => {
    dialogVisible && setFormData(() => ({ ...emptyNote, ...note }));
  };
  useEffect(updateNote, [dialogVisible, note]);

  const onSubmit = e => {
    e.preventDefault();
    if (!formData.title) {
      alert.show('Note title can not be empty');
      return;
    }

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

    onCloseDialog();
  };

  const onDelete = () => {
    dispatch({
      type: 'REMOVE_NOTE',
      payload: { ...formData }
    });
    onCloseDialog();
  };

  const onCtrlEnter = e => {
    if (e.ctrlKey && e.keyCode === 13) onSubmit(e);
  };

  const onCloseDialog = () => {
    dispatch({
      type: 'CLEAR_NOTE'
    });
    closeDialog();
  };

  return (
    <Modal
      show={dialogVisible}
      onHide={onCloseDialog}
      onKeyDown={e => onCtrlEnter(e)}
      enforceFocus={false}>
      <NoteDialogForm onSubmit={onSubmit} formData={formData} setFormData={setFormData}>
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
