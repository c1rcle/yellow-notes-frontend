import yellowNotesApi from '../../../apis/yellowNotesApi';
import yellowNotesApiHandler from '../../../apis/yellowNotesApiHandler';

const registerAction = async (action, dispatch) => {
  const { payload } = action;

  if (!payload || !payload.password || !payload.email || Object.keys(payload).length !== 2)
    throw new Error('Registration request has invalid parameters!');

  dispatch({ type: 'LOADING_START' });

  const response = await yellowNotesApiHandler(
    yellowNotesApi().post('users/register', { ...payload }),
    { type: 'REGISTER', msg: 'This email is already registered!' }
  );
  if (response.type === 'ERROR') return response;

  localStorage.setItem('token', response.data.token);

  return { ...action, payload: { email: payload.email } };
};

export default registerAction;
