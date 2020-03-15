export default (state = {}, { type, payload }) => {
  switch (type) {
    case 'REGISTER':
      return { ...payload };
    case 'LOGIN':
      return { ...payload };
    case 'ADD_NOTE':
      console.log(payload);
      const newId =
        state.notes.length === 0
          ? 0
          : state.notes[state.notes.length - 1].id + 1;
      return { ...state, notes: [...state.notes, { ...payload, id: newId }] };
    case 'LOGOUT':
      return {};
    default:
      return state;
  }
};
