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

  if (
    !action.payload ||
    !action.payload.password ||
    !action.payload.email ||
    Object.keys(action.payload).length !== 2
  )
    throw new Error('Registration request has invalid parameters!');

  let response;
  try {
    response = await yellowNotesApi.post('users/authenticate', action.payload);
  } catch (e) {
    throw new Error('Registration request has did not succeed! ', response);
  }

  if (response.status !== 200)
    throw new Error('Registration request has did not succeed! ', response);

  localStorage.setItem('token', response.data.token);
  console.log(response);

  return { ...action, payload: { ...action.payload, notes: sampleNotes } };
};

export default loginAction;
