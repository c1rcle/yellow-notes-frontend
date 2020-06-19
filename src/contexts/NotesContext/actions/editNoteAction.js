import yellowNotesApi from '../../../apis/yellowNotesApi';
import yellowNotesApiHandler from '../../../apis/yellowNotesApiHandler';
import moment from 'moment';

const editNoteAction = async (action, dispatch) => {
  const note = action.payload.note;
  if (!note || !note.noteId) throw new Error('Edit note request has invalid parameters!');

  dispatch({ type: 'LOADING_START' });

  const response = await yellowNotesApiHandler(yellowNotesApi().put('notes/' + note.noteId, note), {
    type: 'EDIT',
    msg: 'Error while editing note!'
  });
  if (response.type === 'ERROR') return response;

  note.modificationDate = moment().format();
  const filters = action.payload.filters;

  if (note.categoryId && filters.length > 0 && !filters.includes(note.categoryId))
    return { ...action, payload: { note, hide: true } };
  else return { ...action, payload: { note } };
};

export default editNoteAction;
