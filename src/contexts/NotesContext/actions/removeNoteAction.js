import yellowNotesApi from '../../../apis/yellowNotesApi';

const removeNoteAction = async action => {
  if (!action.payload || !action.payload.noteId || Object.keys(action.payload).length !== 1)
    throw new Error('Note deletion request has invalid parameters!');

  let response;
  try {
    response = await yellowNotesApi.delete('notes/' + action.payload.noteId);
  } catch (e) {
    throw new Error('Add note deletion has failed! ', response);
  }

  if (response.status !== 204) throw new Error('Add note deletion has failed! ', response);

  return { ...action };
};

export default removeNoteAction;
