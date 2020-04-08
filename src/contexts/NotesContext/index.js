import React, { createContext, useReducer } from 'react';
import notesReducer from './reducer';
import dispatchAsync from './dispatchAsync';
import useNoteDialog from '../../hooks/useNoteDialog';

const NotesContext = createContext();

export function NotesProvider({ children }) {
  const [notes, dispatch] = useReducer(notesReducer, {
    loadedCount: 0,
    serverCount: -1,
    notes: [],
    isLoading: false
  });

  const noteDialog = useNoteDialog();

  return (
    <NotesContext.Provider value={[notes, dispatchAsync(dispatch), noteDialog]}>
      {children}
    </NotesContext.Provider>
  );
}

export default function useNotes() {
  const context = React.useContext(NotesContext);

  if (context === undefined) {
    throw new Error('useNotes must be used within a NotesProvider');
  }

  return context;
}
