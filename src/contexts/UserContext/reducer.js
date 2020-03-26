export default (state = { isUserLoggedIn: false }, { type, payload }) => {
  switch (type) {
    case 'CHECK_TOKEN':
      return { isUserLoggedIn: !!payload, ...payload };
    case 'LOADING_START':
      return { ...state, isLoading: true };
    case 'REGISTER':
      return { ...payload, isUserLoggedIn: true };
    case 'REGISTER_FAILED':
      return {
        isUserLoggedIn: false,
        error: { type: 'REGISTER', message: 'Email is occupied!' }
      };
    case 'LOGIN':
      return { ...payload, isUserLoggedIn: true };
    case 'LOGIN_FAILED':
      return {
        isUserLoggedIn: false,
        error: { type: 'LOGIN', message: 'Wrong email / password!' }
      };
    case 'CLEAR_ERROR':
      return { ...state, error: null };
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
