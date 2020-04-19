import yellowNotesApi from '../../../apis/yellowNotesApi';

const removeNoteAction = async (action, dispatch) => {
  if (!action.payload || !action.payload.noteId)
    throw new Error('Note deletion request has invalid parameters!');

  dispatch({ type: 'LOADING_START' });

  let response;
  try {
    response = await yellowNotesApi().delete('notes/' + action.payload.noteId);
  } catch (e) {
    response = e.response;
  }

  if (response.status !== 204) {
    return { type: 'ERROR', payload: { type: 'REMOVE', msg: 'Error while removing note!' } };
  }

  return { ...action };
};

export default removeNoteAction;
