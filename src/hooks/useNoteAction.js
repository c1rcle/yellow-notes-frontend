import useNotes from '../contexts/NotesContext';

const useNoteAction = () => {
  const [, dispatch] = useNotes();

  const addNote = formData => {
    dispatch({
      type: 'ADD_NOTE',
      payload: { ...formData }
    });
  };

  const editNote = (formData, note) => {
    Object.keys(formData).length > 1 &&
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
  };

  const removeNote = formData => {
    dispatch({
      type: 'REMOVE_NOTE',
      payload: { ...formData }
    });
  };

  return { addNote, editNote, removeNote };
};
export default useNoteAction;
