// TODO API - uncomment
//import yellowNotesApi from '../../apis/yellowNotesApi';

const addNoteAction = async action => {
  if (!action.payload || !action.payload.content || Object.keys(action.payload).length !== 1)
    throw new Error('Registration request has invalid parameters!');

  let response;
  try {
    // TODO API - remove and uncomment
    response = {
      status: 200,
      data: { content: action.payload.content }
    };
    //response = await yellowNotesApi.post('user/note', { ...action.payload });
  } catch (e) {
    throw new Error('Add note action has failed! ', response);
  }

  if (response.status !== 200) throw new Error('Add note action has failed! ', response);

  return { ...action, payload: response.data };
};

export default addNoteAction;
