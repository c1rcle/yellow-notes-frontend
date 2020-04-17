import yellowNotesApi from '../../../apis/yellowNotesApi';

const removeNoteAction = async (action, dispatch) => {
  if (!action.payload || !action.payload.noteId)
    throw new Error('Note deletion request has invalid parameters!');

  dispatch({ type: 'LOADING_START' });

  let response;
  try {
    response = await yellowNotesApi().delete('notes/' + action.payload.noteId);
  } catch (e) {
    response = { status: 500 };
    console.error(e);
  }

  if (response.status !== 204) {
    return { type: 'REMOVE_FAILED' };
  }

  return { ...action };
};

export default removeNoteAction;
