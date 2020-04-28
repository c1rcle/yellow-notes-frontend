import yellowNotesApi from '../../../apis/yellowNotesApi';
import yellowNotesApiHandler from '../../../apis/yellowNotesApiHandler';

const loginAction = async (action, dispatch) => {
  const { payload } = action;
  if (!payload || !payload.password || !payload.email || Object.keys(payload).length !== 2)
    throw new Error('Login request has invalid parameters!');

  dispatch({ type: 'LOADING_START' });

  const response = await yellowNotesApiHandler(
    yellowNotesApi().post('users/authenticate', payload),
    { type: 'LOGIN', msg: 'Wrong email or password!' }
  );
  if (response.type === 'ERROR') return response;

  localStorage.setItem('token', response.data.token);

  return { ...action, payload: { email: payload.email } };
};

export default loginAction;
