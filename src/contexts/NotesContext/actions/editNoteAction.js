import yellowNotesApi from '../../../apis/yellowNotesApi';

const editNoteAction = async (action, dispatch) => {
  if (!action.payload || !action.payload.noteId)
    throw new Error('Edit note request has invalid parameters!');

  const note = { ...action.payload };

  dispatch({ type: 'LOADING_START' });

  let response;
  try {
    response = await yellowNotesApi().put('notes/' + action.payload.noteId, note);
  } catch (e) {
    response = e.response;
  }

  if (response.status !== 204) {
    return { type: 'ERROR', payload: { type: 'EDIT', msg: 'Error while editing note!' } };
  }

  note.modificationDate = Date(Date.now());

  return { ...action, payload: note };
};

export default editNoteAction;
