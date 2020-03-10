export default (state = {}, { type, payload }) => {
  switch (type) {
    case 'REGISTER':
      return { ...payload };
    case 'LOGIN':
      return { ...payload };
    case 'LOGOUT':
      return {};
    default:
      return state;
  }
};
