import yellowNotesApi from '../../../apis/yellowNotesApi';

const loginAction = async action => {
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
  const { email, password } = payload;

  if (!payload || !password || !email || Object.keys(action.payload).length !== 2)
    throw new Error('Login request has invalid parameters!');

  let response;
  try {
    response = await yellowNotesApi.post('users/authenticate', payload);
  } catch (e) {
    throw new Error('Login request has did not succeed! ', response);
  }

  if (response.status !== 200) {
    return { type: 'LOGIN_FAILED' };
  }

  localStorage.setItem('token', response.data.token);

  return { ...action, payload: { email, notes: sampleNotes } };
};

export default loginAction;
