import yellowNotesApi from '../../../apis/yellowNotesApi';

const loginAction = async (action, dispatch) => {
  // TODO API - remove
  const sampleNotes = [
    {
      id: 0,
      content: 'Some example text'
    },
    {
      id: 1,
      content: 'Some example text'
    },
    {
      id: 2,
      content: 'Some example text'
    },
    {
      id: 3,
      content: 'Some example text'
    },
    {
      id: 4,
      content: 'Multi \nline \ntext'
    }
  ];

  const { payload } = action;
  if (!payload || !payload.password || !payload.email || Object.keys(payload).length !== 2)
    throw new Error('Login request has invalid parameters!');

  dispatch({ type: 'LOADING_START' });

  let response;
  try {
    response = await yellowNotesApi.post('users/authenticate', payload);
  } catch (e) {
    response = { status: 400 };
    console.error(e);
  }

  if (response.status !== 200) {
    return { type: 'LOGIN_FAILED' };
  }

  localStorage.setItem('token', response.data.token);

  return { ...action, payload: { email: payload.email, notes: sampleNotes } };
};

export default loginAction;
