import yellowNotesApi from '../../../apis/yellowNotesApi';

const addNoteAction = async action => {
  if (!action.payload || !action.payload.content || Object.keys(action.payload).length !== 1)
    throw new Error('Note creation request has invalid parameters!');

  const note = { title: '', ...action.payload };
  let response;
  try {
    response = await yellowNotesApi.post('notes', note);
  } catch (e) {
    throw new Error('Add note action has failed! ', response);
  }

  if (response.status !== 201) throw new Error('Add note action has failed! ', response);

  return { ...action, payload: response.data };
};

export default addNoteAction;
