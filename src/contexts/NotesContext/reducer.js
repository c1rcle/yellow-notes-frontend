export default (state, { type, payload }) => {
  switch (type) {
    case 'LOADING_START': {
      return { ...state, isLoading: true };
    }

    case 'ADD_NOTE': {
      const newId = state.notes.length === 0 ? 0 : state.notes[state.notes.length - 1].id + 1;
      return { ...state, notes: [...state.notes, { ...payload, id: newId }] };
    }

    case 'EDIT_NOTE': {
      if (!state.notes.some(n => n.id === payload.id)) return state;
      const notes = state.notes.map(n => (n.id === payload.id ? { ...n, ...payload } : n));
      return { ...state, notes };
    }

    case 'REMOVE_NOTE': {
      if (!state.notes.some(n => n.id === payload.id)) return state;
      const notes = state.notes.filter(n => n.id !== payload.id);
      return { ...state, notes };
    }

    default:
      return state;
  }
};
