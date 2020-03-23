// TODO API - uncomment
import yellowNotesApi from '../../../apis/yellowNotesApi';

const registerAction = async action => {
  if (
    !action.payload ||
    !action.payload.password ||
    !action.payload.email ||
    Object.keys(action.payload).length !== 2
  )
    throw new Error('Registration request has invalid parameters!');

  let response;
  try {
    console.log({ ...action.payload });
    response = await yellowNotesApi.post('users/register', { ...action.payload });
  } catch (e) {
    throw new Error('Registration request has did not succeed! ', response);
  }
  console.log(response);

  if (response.status !== 200)
    throw new Error('Registration request has did not succeed! ', response);

  return { ...action, payload: response.data };
};

export default registerAction;
