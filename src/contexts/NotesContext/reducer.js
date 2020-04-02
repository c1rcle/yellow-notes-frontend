export default (state, { type, payload }) => {
  switch (type) {
    case 'LOADING_START': {
      return { ...state, isLoading: true };
    }

    case 'ADD_NOTE': {
      return { ...state, notes: [...state.notes, { ...payload }] };
    }

    case 'EDIT_NOTE': {
      if (!state.notes.some(n => n.noteId === payload.noteId)) return state;
      const notes = state.notes.map(n => (n.noteId === payload.noteId ? { ...n, ...payload } : n));
      return { ...state, notes };
    }

    case 'REMOVE_NOTE': {
      if (!state.notes.some(n => n.noteId === payload.noteId)) return state;
      const notes = state.notes.filter(n => n.noteId !== payload.noteId);
      return { ...state, notes };
    }

    default:
      return state;
  }
};
