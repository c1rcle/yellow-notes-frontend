import useNotes from '../contexts/NotesContext';
import { useHistory } from 'react-router-dom';

const useNoteAction = () => {
  const [, dispatch] = useNotes();
  let history = useHistory();

  const filterProperties = (formData, note) => {
    return Object.keys(formData).filter(key => formData[key] !== note[key]);
  };

  const addNote = formData => {
    dispatch({
      type: 'ADD_NOTE',
      payload: { ...formData }
    });
  };

  const editNote = (formData, note) => {
    if (filterProperties(formData, note).length === 0) return;
    formData.title &&
      history.replace(
        `/notes/${note.noteId}/${formData.title.substring(0, 25).replace(/\s+/g, '-')}`
      );

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
