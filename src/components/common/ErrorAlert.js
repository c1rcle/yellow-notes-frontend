import { useEffect } from 'react';
import { useAlert } from 'react-alert';
import useUser from '../../contexts/UserContext';
import useNotes from '../../contexts/NotesContext';
import useCategories from '../../contexts/CategoriesContext';

const ErrorAlert = () => {
  const alert = useAlert();
  const [user, dispatchUser] = useUser();
  const [notes, dispatchNotes] = useNotes();
  const [categories, dispatchCategories] = useCategories();

  const showUserError = () => {
    if (user.error) {
      setTimeout(() => dispatchUser({ type: 'CLEAR_ERROR' }), 3000);
      alert.error(user.error.message);
    }
  };
  useEffect(showUserError, [user.error]);

  const showNotesError = () => {
    if (notes.error) {
      setTimeout(() => dispatchNotes({ type: 'CLEAR_ERROR' }), 3000);
      alert.error(notes.error.message);
    }
  };
  useEffect(showNotesError, [notes.error]);

  const showCategoriesError = () => {
    if (categories.error) {
      setTimeout(() => dispatchCategories({ type: 'CLEAR_ERROR' }), 3000);
      alert.error(categories.error.message);
    }
  };
  useEffect(showCategoriesError, [categories.error]);

  return null;
};

export default ErrorAlert;
