import yellowNotesApi from '../../../apis/yellowNotesApi';

const editNoteAction = async (action, dispatch) => {
  if (!action.payload || !action.payload.noteId || Object.keys(action.payload).length <= 1)
    throw new Error('Edit note request has invalid parameters!');

  const note = { ...action.payload };

  dispatch({ type: 'LOADING_START' });

  let response;
  try {
    response = await yellowNotesApi().put('notes/' + action.payload.noteId, note);
  } catch (e) {
    throw new Error('Edit note action has failed! ', response);
  }

  if (response.status !== 204) throw new Error('Edit note action has failed! ', response);

  note.modificationDate = Date(Date.now());

  return { ...action, payload: note };
};

export default editNoteAction;