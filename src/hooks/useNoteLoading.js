import { useState, useEffect } from 'react';
import useCategories from '../contexts/CategoriesContext';
import useFilters from '../contexts/FiltersContext';
import useNotes from '../contexts/NotesContext';

const useNoteLoading = () => {
  const [{ notes, isLoading, loadedCount, serverCount }, dispatch] = useNotes();
  const [{ categories }] = useCategories();
  const [{ filters, needUpdate }] = useFilters();

  const [payload, setPayload] = useState(null);

  const loadNotes = (takeCount, skipCount) => {
    if (isLoading || payload || needUpdate) return;

    const filterCategories = filters.filter(f => f.checked).map(f => f.categoryId);
    const payloadData =
      filters.length > 0
        ? { takeCount: takeCount, skipCount: skipCount, categories: filterCategories }
        : { takeCount: takeCount, skipCount: skipCount };

    if (loadedCount < serverCount || serverCount === -1) {
      setPayload(payloadData);
    }
  };

  const dispatchAction = () => {
    if (payload) {
      dispatch({
        type: 'GET_NOTES',
        payload: payload
      });
      setPayload(null);
    }
  };
  useEffect(dispatchAction, [payload]);

  const updateNotesOnCategoryDelete = () => {
    notes.some(note => {
      if (!categories.find(c => c.categoryId === note.categoryId)) {
        const filterCategories = filters.filter(f => f.checked).map(f => f.categoryId);
        const payload =
          filters.length > 0
            ? { takeCount: loadedCount, skipCount: 0, categories: filterCategories }
            : { takeCount: loadedCount, skipCount: 0 };
        dispatch({ type: 'GET_NOTES', payload: payload });
        return true;
      } else return false;
    });
  };
  useEffect(updateNotesOnCategoryDelete, [categories.length]);

  return loadNotes;
};

export default useNoteLoading;
