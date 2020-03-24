export default (state = { isUserLoggedIn: false }, { type, payload }) => {
  switch (type) {
    case 'CHECK_TOKEN':
      return { isUserLoggedIn: false, ...payload };
    case 'REGISTER':
      return { ...payload, isUserLoggedIn: true };
    case 'REGISTER_FAILED':
      return { isUserLoggedIn: false };
    case 'LOGIN':
      return { ...payload, isUserLoggedIn: true };
    case 'LOGIN_FAILED':
      return { isUserLoggedIn: false };
    case 'ADD_NOTE':
      let newId = 0;
      if (!!state.notes)
        newId = state.notes.length === 0 ? 0 : state.notes[state.notes.length - 1].id + 1;
      return { ...state, notes: [...(state.notes || []), { ...payload, id: newId }] };
    case 'LOGOUT':
      return { isUserLoggedIn: false };
    default:
      return state;
  }
};
