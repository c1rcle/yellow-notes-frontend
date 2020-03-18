// TODO API
//import yellowNotesApi from '../../apis/yellowNotesApi';

export default registerAction = async action => {
  if (
    !action.payload ||
    !action.payload.password ||
    !action.payload.email ||
    Object.keys(action.payload).length !== 2
  )
    throw new Error('Registration request has invalid parameters!');

  let response;
  try {
    // TODO API
    response = {
      status: 200,
      data: { email: action.payload.email }
    };
    //response = await yellowNotesApi.post('user/register', { ...action.payload });
  } catch (e) {
    throw new Error('Registration request has did not succeed! ', response);
  }

  if (response.status !== 200)
    throw new Error('Registration request has did not succeed! ', response);

  action.payload = response.data;

  return action;
};
