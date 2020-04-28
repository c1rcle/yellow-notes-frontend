import yellowNotesApi from '../../../apis/yellowNotesApi';
import yellowNotesApiHandler from '../../../apis/yellowNotesApiHandler';
import moment from 'moment';

const editNoteAction = async (action, dispatch) => {
  if (!action.payload || !action.payload.noteId)
    throw new Error('Edit note request has invalid parameters!');

  const note = { ...action.payload };

  dispatch({ type: 'LOADING_START' });

  const response = await yellowNotesApiHandler(
    yellowNotesApi().put('notes/' + action.payload.noteId, note),
    { type: 'EDIT', msg: 'Error while editing note!' }
  );
  if (response.type === 'ERROR') return response;

  note.modificationDate = moment.now();

  return { ...action, payload: note };
};

export default editNoteAction;
