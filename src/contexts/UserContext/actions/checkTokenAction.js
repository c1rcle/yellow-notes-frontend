import decode from 'jwt-decode';
//import yellowNotesApi from '../../../apis/yellowNotesApi';

const checkTokenAction = async action => {
  const token = localStorage.getItem('token');

  if (!token) return action;

  const decodedToken = decode(token);

  if (decodedToken.exp < new Date().getTime() / 1000 || !decodedToken.email) {
    localStorage.removeItem('token');
    return;
  }

  // let response;
  // try {
  //   response = await cinemaBack.get('users/');
  // } catch (e) {
  //   response = { status: 400 };
  //   console.error(e);
  // }
  // localStorage.setItem('token', response.data.token);

  return { ...action, payload: { isUserLoggedIn: true, email: decodedToken.email } };
};

export default checkTokenAction;
