import React, { createContext, useReducer } from 'react';
import notesReducer from './reducer';
import dispatchAsync from './dispatchAsync';

const NotesContext = createContext();

export function NotesProvider({ children }) {
  const [notes, dispatch] = useReducer(notesReducer, {});

  return (
    <NotesContext.Provider value={[notes, dispatchAsync(dispatch)]}>
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
