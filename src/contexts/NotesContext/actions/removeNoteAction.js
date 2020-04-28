import yellowNotesApi from '../../../apis/yellowNotesApi';
import yellowNotesApiHandler from '../../../apis/yellowNotesApiHandler';

const removeNoteAction = async (action, dispatch) => {
  if (!action.payload || !action.payload.noteId)
    throw new Error('Note deletion request has invalid parameters!');

  dispatch({ type: 'LOADING_START' });

  const response = await yellowNotesApiHandler(
    yellowNotesApi().delete('notes/' + action.payload.noteId),
    { type: 'REMOVE', msg: 'Error while removing note!' }
  );
  return response.type === 'ERROR' ? response : { ...action };
};

export default removeNoteAction;
