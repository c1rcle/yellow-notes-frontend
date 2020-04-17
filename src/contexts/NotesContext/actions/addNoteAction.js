import yellowNotesApi from '../../../apis/yellowNotesApi';

const addNoteAction = async (action, dispatch) => {
  if (!action.payload || !action.payload.title || Object.keys(action.payload).length <= 1)
    throw new Error('Note creation request has invalid parameters!');

  const note = { ...action.payload };

  dispatch({ type: 'LOADING_START' });

  let response;
  try {
    response = await yellowNotesApi().post('notes', note);
  } catch (e) {
    response = { status: 500 };
    console.error(e);
  }

  if (response.status !== 201) {
    return { type: 'ADD_FAILED' };
  }
  return { ...action, payload: response.data };
};

export default addNoteAction;
