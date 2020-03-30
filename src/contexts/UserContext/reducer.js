export default (
  state = { email: null, isLoading: false, isUserLoggedIn: false, error: null },
  { type, payload }
) => {
  switch (type) {
    case 'CHECK_TOKEN':
      return { ...state, ...payload };
    case 'LOADING_START':
      return { ...state, isLoading: true };
    case 'REGISTER':
      return { ...payload, isUserLoggedIn: true };
    case 'REGISTER_FAILED':
      return {
        isUserLoggedIn: false,
        error: { type: 'REGISTER', message: 'This email is already registered!' }
      };
    case 'LOGIN':
      return { ...payload, isUserLoggedIn: true };
    case 'LOGIN_FAILED':
      return {
        isUserLoggedIn: false,
        error: { type: 'LOGIN', message: 'Wrong email or password!' }
      };
    case 'CLEAR_ERROR':
      return { ...state, error: null };
    case 'LOGOUT':
      return { isUserLoggedIn: false };
    default:
      return state;
  }
};
