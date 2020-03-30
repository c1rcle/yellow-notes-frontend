export default (state = { notes: [], isLoading: false }, { type, payload }) => {
  switch (type) {
    case 'LOADING_START':
      return { ...state, isLoading: true };
    case 'ADD_NOTE':
      let newId = 0;
      if (!!state.notes)
        newId = state.notes.length === 0 ? 0 : state.notes[state.notes.length - 1].id + 1;
      return { ...state, notes: [...(state.notes || []), { ...payload, id: newId }] };
    default:
      return state;
  }
};
