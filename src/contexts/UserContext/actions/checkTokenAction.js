import decode from 'jwt-decode';
//import yellowNotesApi from '../../../apis/yellowNotesApi';

const checkTokenAction = async (action, dispatch) => {
  const token = localStorage.getItem('token');

  if (!token) throw new Error('Token expired');

  const decodedToken = decode(token);

  if (!decodedToken || decodedToken.exp < new Date().getTime() / 1000 || !decodedToken.email) {
    localStorage.removeItem('token');
    throw new Error('Token expired');
  }
  dispatch({ type: 'LOADING_START' });

  return { ...action, payload: { isUserLoggedIn: true, email: decodedToken.email } };
};

export default checkTokenAction;
