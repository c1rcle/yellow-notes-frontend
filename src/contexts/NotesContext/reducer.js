export default (state, { type, payload }) => {
  switch (type) {
    case 'LOADING_START': {
      return { ...state, isLoading: true };
    }

    case 'GET_NOTES': {
      const notes = [...state.notes];
      payload.notes.forEach(note => {
        const index = notes.findIndex(n => n.noteId === note.noteId);
        index === -1 ? notes.push(note) : (notes[index] = note);
      });
      return { ...state, ...payload, notes, isLoading: false };
    }

    case 'ADD_NOTE': {
      return { ...state, notes: [{ ...payload }, ...state.notes], isLoading: false };
    }

    case 'EDIT_NOTE': {
      if (!state.notes.some(n => n.noteId === payload.noteId)) return state;
      const note = { ...state.notes.find(n => n.noteId === payload.noteId), ...payload };
      const notes = state.notes.filter(n => n.noteId !== payload.noteId);
      return { ...state, notes: [note, ...notes], isLoading: false };
    }

    case 'REMOVE_NOTE': {
      if (!state.notes.some(n => n.noteId === payload.noteId)) return state;
      const notes = state.notes.filter(n => n.noteId !== payload.noteId);
      return { ...state, notes, isLoading: false };
    }

    case 'CLEAR_NOTES': {
      return {
        loadedCount: 0,
        serverCount: -1,
        notes: [],
        isLoading: false
      };
    }

    case 'ERROR': {
      return {
        ...state,
        error: { type: payload.type, message: payload.msg }
      };
    }

    case 'CLEAR_ERROR': {
      return { ...state, error: null };
    }

    default:
      return state;
  }
};
