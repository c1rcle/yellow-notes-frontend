// TODO API - uncomment
//import yellowNotesApi from '../../apis/yellowNotesApi';

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
    // TODO API - remove and uncomment
    response = {
      status: 200,
      data: { email: action.payload.email, notes: sampleNotes }
    };
    //response = await yellowNotesApi.post('user/register', { ...action.payload });
  } catch (e) {
    throw new Error('Registration request has did not succeed! ', response);
  }

  if (response.status !== 200)
    throw new Error('Registration request has did not succeed! ', response);

  return { ...action, payload: response.data };
};

export default loginAction;
