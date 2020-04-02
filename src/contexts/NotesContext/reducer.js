export default (state, { type, payload }) => {
  switch (type) {
    case 'LOADING_START': {
      return { ...state, isLoading: true };
    }

    case 'GET_NOTES': {
      return { ...state, ...payload, isLoading: false };
    }

    case 'ADD_NOTE': {
      return { ...state, notes: [...state.notes, { ...payload }], isLoading: false };
    }

    case 'EDIT_NOTE': {
      if (!state.notes.some(n => n.noteId === payload.noteId)) return state;
      const notes = state.notes.map(n => (n.noteId === payload.noteId ? { ...n, ...payload } : n));
      return { ...state, notes, isLoading: false };
    }

    case 'REMOVE_NOTE': {
      if (!state.notes.some(n => n.noteId === payload.noteId)) return state;
      const notes = state.notes.filter(n => n.noteId !== payload.noteId);
      return { ...state, notes, isLoading: false };
    }

    case 'CLEAR_NOTES': {
      return { count: 0, notes: [], isLoading: false };
    }

    default:
      return state;
  }
};
