import yellowNotesApi from '../../../apis/yellowNotesApi';

const registerAction = async action => {
  const { payload } = action;
  const { email, password } = payload;
  if (!payload || !password || !email || Object.keys(payload).length !== 2)
    throw new Error('Registration request has invalid parameters!');

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

  return { ...action, payload: { email } };
};

export default registerAction;
