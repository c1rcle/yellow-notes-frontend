export default (state, { type, payload }) => {
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
    case 'ERROR':
      return {
        isUserLoggedIn: false,
        error: { type: payload.type, message: payload.msg }
      };
    case 'CLEAR_ERROR':
      return { ...state, error: null };
    case 'LOGOUT':
      return {
        email: null,
        isLoading: false,
        isUserLoggedIn: false,
        error: null
      };
    default:
      return state;
  }
};
