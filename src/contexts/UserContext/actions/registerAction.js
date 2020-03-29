import yellowNotesApi from '../../../apis/yellowNotesApi';

const registerAction = async (action, dispatch) => {
  const { payload } = action;

  if (!payload || !payload.password || !payload.email || Object.keys(payload).length !== 2)
    throw new Error('Registration request has invalid parameters!');

  dispatch({ type: 'LOADING_START' });

  let response;
  try {
    response = await yellowNotesApi.post('users/register', { ...payload });
  } catch (e) {
    response = { status: 400 };
    console.error(e);
  }

  if (response.status !== 200) {
    return { type: 'REGISTER_FAILED' };
  }

  localStorage.setItem('token', response.data.token);

  return { ...action, payload: { email: payload.email } };
};

export default registerAction;
