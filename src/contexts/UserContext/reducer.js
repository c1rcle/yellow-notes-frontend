export default (state = { isUserLoggedIn: false }, { type, payload }) => {
  switch (type) {
    case 'REGISTER':
      return { ...payload, isUserLoggedIn: true };
    case 'LOGIN':
      return { ...payload, isUserLoggedIn: true };
    case 'ADD_NOTE':
      console.log(payload);
      const newId = state.notes.length === 0 ? 0 : state.notes[state.notes.length - 1].id + 1;
      return { ...state, notes: [...state.notes, { ...payload, id: newId }] };
    case 'LOGOUT':
      return { isUserLoggedIn: false };
    default:
      return state;
  }
};
