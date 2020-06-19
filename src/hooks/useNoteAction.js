import useNotes from '../contexts/NotesContext';

const useNoteAction = () => {
  const [, dispatch] = useNotes();

  const filterProperties = (formData, note) => {
    return Object.keys(formData).filter(key => formData[key] !== note[key]);
  };

  const addNote = (formData, filters) => {
    dispatch({
      type: 'ADD_NOTE',
      payload: { formData, filters }
    });
  };

  const editNote = (formData, note) => {
    if (filterProperties(formData, note).length === 0) return;

    Object.keys(formData).length > 1 &&
      formData.noteId &&
      dispatch({
        type: 'EDIT_NOTE',
        payload: {
          ...filterProperties(formData, note).reduce(
            (res, key) => ({ ...res, [key]: formData[key] }),
            {}
          ),
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
